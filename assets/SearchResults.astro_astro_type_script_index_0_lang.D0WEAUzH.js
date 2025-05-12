const e={searchResultsContainer:document.getElementById("search-results-container"),searchResults:document.getElementById("search-results"),closeButton:document.getElementById("close-search-results")};document.addEventListener("docsearch",s=>{const n=s.detail.query;n&&e.searchResultsContainer&&e.searchResults&&(e.searchResultsContainer.classList.remove("hidden"),document.body.classList.add("overflow-hidden"),e.searchResults.querySelectorAll(".search-result-item, .error-message").forEach(a=>a.remove()),d(n))});e.closeButton&&e.closeButton.addEventListener("click",()=>{e.searchResultsContainer&&(e.searchResultsContainer.classList.add("hidden"),document.body.classList.remove("overflow-hidden"))});e.searchResultsContainer&&e.searchResultsContainer.addEventListener("click",s=>{s.target===e.searchResultsContainer&&e.searchResultsContainer&&(e.searchResultsContainer.classList.add("hidden"),document.body.classList.remove("overflow-hidden"))});document.addEventListener("keydown",s=>{s.key==="Escape"&&e.searchResultsContainer&&!e.searchResultsContainer.classList.contains("hidden")&&(e.searchResultsContainer.classList.add("hidden"),document.body.classList.remove("overflow-hidden"))});async function d(s){try{const t=window.location.pathname.split("/"),n=t[1]||"en",r=t[2]||"v1",a=await fetch(`/search/index-${n}-${r}.json`);if(!a.ok)throw new Error(`検索インデックスの取得に失敗しました: ${a.status}`);const c=(await a.json()).filter(o=>{const l=o.title.toLowerCase().includes(s.toLowerCase()),i=o.content.toLowerCase().includes(s.toLowerCase());return l||i});u(c,s)}catch(t){console.error("検索エラー:",t),h(t instanceof Error?t.message:"検索中にエラーが発生しました")}}function u(s,t){const n=e.searchResults;if(n){if(n.innerHTML="",s.length===0){const r=document.createElement("div");r.className="no-results",r.textContent=`"${t}" に一致する結果が見つかりませんでした。`,n.appendChild(r);return}s.forEach(r=>{const a=document.createElement("div");a.className="search-result-item",a.innerHTML=`
        <div class="result-card">
          <div class="result-header">
            <h3 class="result-title">${r.title}</h3>
            <div class="result-badge">
              ${r.project} ${r.version}
            </div>
          </div>
          <p class="result-excerpt">${m(r.excerpt||"",t)}</p>
          <a href="${r.url}" class="result-link">
            詳細を見る
            <svg class="result-link-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </a>
        </div>
      `,n.appendChild(a)})}}function h(s){const t=e.searchResults;if(!t)return;t.innerHTML="";const n=document.createElement("div");n.className="error-message",n.innerHTML=`
      <div class="error-content">
        <svg class="error-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
        <span>${s}</span>
      </div>
    `,t.appendChild(n)}function m(s,t){if(!t)return s;const n=new RegExp(`(${t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"gi");return s.replace(n,'<mark class="highlight-text">$1</mark>')}
