const l=document.getElementById("search-results"),a=document.getElementById("search-results-container"),r=document.getElementById("search-loading"),c=document.getElementById("search-empty"),L=document.getElementById("close-search-results");document.addEventListener("docsearch",n=>{const{query:i}=n.detail;l&&r&&c&&a&&(l.classList.remove("hidden"),r.classList.remove("hidden"),c.classList.add("hidden"),a.querySelectorAll(".search-result-item").forEach(d=>d.remove()),setTimeout(()=>{E(i)},500))});L&&l&&L.addEventListener("click",()=>{l.classList.add("hidden")});async function E(n){if(!r||!c||!a)return;const i=window.location.pathname,h=i.match(/^\/(en|ja)/),d=i.match(/\/(v[0-9]+)/),f=h?h[1]:"en",p=d?d[1]:"v1";try{const m=`/search/index-${f}-${p}.json`,s=await fetch(m);if(!s.ok)throw new Error(`検索インデックスの取得に失敗しました: ${s.status}`);const v=(await s.json()).documents.filter(e=>{const t=e.title.toLowerCase().includes(n.toLowerCase()),o=e.content.toLowerCase().includes(n.toLowerCase());return t||o}).slice(0,10);r.classList.add("hidden"),v.length>0?(c.classList.add("hidden"),v.forEach(e=>{let t="";if(e.content){const u=e.content.toLowerCase().indexOf(n.toLowerCase());if(u!==-1){const w=Math.max(0,u-50),g=Math.min(e.content.length,u+n.length+50);t=e.content.substring(w,g),w>0&&(t="..."+t),g<e.content.length&&(t+="...")}else t=e.content.substring(0,100)+"..."}const o=document.createElement("div");o.className="search-result-item",o.innerHTML=`
            <a href="${e.url}" class="block">
              <div class="card bg-base-100 shadow-sm hover:shadow-md transition-shadow">
                <div class="card-body p-4">
                  <div class="flex items-center justify-between">
                    <h3 class="card-title text-base">${e.title}</h3>
                    <div class="badge badge-sm">${e.project} ${e.version}</div>
                  </div>
                  <p class="text-sm opacity-70">${t}</p>
                </div>
              </div>
            </a>
          `,a.appendChild(o)})):c.classList.remove("hidden")}catch(m){console.error("検索中にエラーが発生しました:",m),r.classList.add("hidden"),c.classList.remove("hidden");const s=document.createElement("div");s.className="alert alert-error",s.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>検索中にエラーが発生しました。</span>
      `,a.appendChild(s)}}
