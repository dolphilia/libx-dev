import{d as u,l as C}from"./index.kbYS10fO.js";function w(s,n=u,o={}){const c=s.split(".");let e=C[n];e||(e=C[u]);for(const i of c)if(e&&typeof e=="object"&&i in e)e=e[i];else return n!==u?w(s,u,o):s;return typeof e!="string"?s:y(e,o)}function y(s,n){return Object.entries(n).reduce((o,[c,e])=>{const i=new RegExp(`{${c}}`,"g");return o.replace(i,String(e))},s)}const g=document.getElementById("search-results"),h=document.getElementById("search-results-container"),m=document.getElementById("search-loading"),l=document.getElementById("search-empty"),f=document.getElementById("no-results-message"),b=document.getElementById("close-search-results");document.addEventListener("docsearch",s=>{const{query:n}=s.detail;g&&m&&l&&h&&(g.classList.remove("hidden"),m.classList.remove("hidden"),l.classList.add("hidden"),h.querySelectorAll(".search-result-item").forEach(c=>c.remove()),setTimeout(()=>{M(n)},500))});b&&g&&b.addEventListener("click",()=>{g.classList.add("hidden")});async function M(s){if(!m||!l||!h)return;const n=window.location.pathname,o=n.match(/^\/(en|ja)/),c=n.match(/\/(v[0-9]+)/),e=o?o[1]:"en",i=c?c[1]:"v1";try{const p=`/search/index-${e}-${i}.json`,a=await fetch(p);if(!a.ok)throw new Error(`検索インデックスの取得に失敗しました: ${a.status}`);const L=(await a.json()).documents.filter(t=>{const r=t.title.toLowerCase().includes(s.toLowerCase()),d=t.content.toLowerCase().includes(s.toLowerCase());return r||d}).slice(0,10);if(m.classList.add("hidden"),L.length>0)l.classList.add("hidden"),f&&(f.textContent=""),L.forEach(t=>{let r="";if(t.content){const v=t.content.toLowerCase().indexOf(s.toLowerCase());if(v!==-1){const x=Math.max(0,v-50),E=Math.min(t.content.length,v+s.length+50);r=t.content.substring(x,E),x>0&&(r="..."+r),E<t.content.length&&(r+="...")}else r=t.content.substring(0,100)+"..."}const d=document.createElement("div");d.className="search-result-item",d.innerHTML=`
            <a href="${t.url}" class="block">
              <div class="card bg-base-100 shadow-sm hover:shadow-md transition-shadow">
                <div class="card-body p-4">
                  <div class="flex items-center justify-between">
                    <h3 class="card-title text-base">${t.title}</h3>
                    <div class="badge badge-sm">${t.project} ${t.version}</div>
                  </div>
                  <p class="text-sm opacity-70">${r}</p>
                </div>
              </div>
            </a>
          `,h.appendChild(d)});else if(l.classList.remove("hidden"),f){const t=w("search.noResults",e).replace("{query}",s);f.textContent=t}}catch(p){console.error("検索中にエラーが発生しました:",p),m.classList.add("hidden"),l.classList.remove("hidden");const a=document.createElement("div");a.className="alert alert-error",a.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>${w("common.error",e)}</span>
      `,h.appendChild(a)}}
