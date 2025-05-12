class p extends HTMLElement{constructor(){super();const s=this.querySelector("button[data-open-modal]"),e=this.querySelector("button[data-close-modal]"),r=this.querySelector("dialog"),o=this.querySelector(".dialog-frame"),n=this.querySelector("#search-input"),i=this.querySelector("#search-results-container");let l={};try{l=JSON.parse(this.dataset.translations||"{}")}catch(t){console.error("Failed to parse search translations:",t)}const a=t=>{("href"in(t.target||{})||document.body.contains(t.target)&&!o.contains(t.target))&&h()},d=t=>{r.showModal(),document.body.classList.add("search-modal-open"),n.focus(),t?.stopPropagation(),window.addEventListener("click",a)},h=()=>{r.close(),document.body.classList.remove("search-modal-open"),window.removeEventListener("click",a)};s.addEventListener("click",d),s.disabled=!1,e.addEventListener("click",h),r.addEventListener("close",()=>{document.body.classList.remove("search-modal-open"),window.removeEventListener("click",a)}),window.addEventListener("keydown",t=>{(t.ctrlKey===!0||t.metaKey===!0)&&t.key==="k"&&(r.open?h():d(),t.preventDefault()),t.key==="/"&&!["INPUT","TEXTAREA"].includes(document.activeElement?.tagName||"")&&(r.open||(d(),t.preventDefault())),t.key==="Escape"&&r.open&&h()}),n.addEventListener("input",()=>{const t=n.value.trim();t.length>=2?this.performSearch(t,i,l):t.length===0&&this.clearResults(i)});const c=this.querySelector(".platform-key");c&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)&&(c.textContent="⌘")}clearResults(s){s.innerHTML=""}async performSearch(s,e,r){try{e.innerHTML=`
          <div class="loading-indicator">
            <div class="loading-spinner"></div>
            <p>${r.searching||"Searching..."}</p>
          </div>
        `;const o=window.location.pathname.split("/"),n=o[1]||"en",i=o[2]||"v1",l=await fetch(`/search/index-${n}-${i}.json`);if(!l.ok)throw new Error(`Failed to fetch search index: ${l.status}`);const d=(await l.json()).filter(c=>{const t=c.title.toLowerCase().includes(s.toLowerCase()),u=c.content.toLowerCase().includes(s.toLowerCase());return t||u}),h=this.groupResultsByCategory(d);this.displayResults(h,s,e,r)}catch(o){console.error("Search error:",o),this.displayError(o instanceof Error?o.message:"An error occurred during search",e,r)}}groupResultsByCategory(s){const e={};return s.forEach(r=>{const o=r.category||"Other";e[o]||(e[o]=[]),e[o].push(r)}),e}displayResults(s,e,r,o){r.innerHTML="";const n=Object.values(s).flat().length;if(n===0){r.innerHTML=`
          <div class="no-results">
            <p>${o.noResults?.replace("{query}",e)||`No results found for "${e}"`}</p>
          </div>
        `;return}const i=document.createElement("div");i.className="results-header",i.innerHTML=`
        <h2 class="results-title">
          ${n===1?o.oneResult?.replace("{query}",e)||`1 result for "${e}"`:o.manyResults?.replace("{query}",e).replace("{count}",n)||`${n} results for "${e}"`}
        </h2>
      `,r.appendChild(i),Object.entries(s).forEach(([l,a])=>{const d=document.createElement("div");d.className="results-category",d.innerHTML=`
          <h3 class="category-title">${l}</h3>
          <div class="category-results"></div>
        `;const h=d.querySelector(".category-results");a.forEach(c=>{const t=document.createElement("div");t.className="result-item";const u=this.extractRelevantExcerpt(c.content,e);t.innerHTML=`
            <a href="${c.url}" class="result-link">
              <h4 class="result-title">${this.highlightMatches(c.title,e)}</h4>
              <div class="result-breadcrumb">${c.breadcrumb||`${c.project} / ${c.version}`}</div>
              <p class="result-excerpt">${this.highlightMatches(u,e)}</p>
            </a>
          `,h.appendChild(t)}),r.appendChild(d)})}extractRelevantExcerpt(s,e){const r=s.toLowerCase(),o=e.toLowerCase(),n=r.indexOf(o);if(n===-1)return s.substring(0,150)+"...";const i=Math.max(0,n-75),l=Math.min(s.length,n+e.length+75);let a=s.substring(i,l);return i>0&&(a="..."+a),l<s.length&&(a=a+"..."),a}highlightMatches(s,e){if(!e)return s;const r=new RegExp(`(${e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"gi");return s.replace(r,'<mark class="search-highlight">$1</mark>')}displayError(s,e,r){e.innerHTML=`
        <div class="search-error">
          <p>${r.searchError||"Search error"}: ${s}</p>
        </div>
      `}}customElements.define("site-search",p);
