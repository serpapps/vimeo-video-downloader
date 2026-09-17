const u="vimeoDownloader:control";export class DownloadManagerUI{constructor(e={}){this.config=e,this.panel=null,this.elements={},this.isCollapsed=!0,this.isHidden=!0}createPanel(){if(this.panel)return this.panel;const e=document.getElementById("vimeo-download-manager");return e?(this.panel=e,this.cacheElements(),this.bindEvents(),this.panel):(this.panel=document.createElement("div"),this.panel.id="vimeo-download-manager",this.panel.style.cssText=this.generatePanelStyles(),this.panel.innerHTML=this.generatePanelHTML(),document.querySelector(this.config.integration?.parentSelector||"body").appendChild(this.panel),this.cacheElements(),this.bindEvents(),this.setHidden(!0),this.panel)}generatePanelStyles(){const t=typeof window<"u"&&window.innerWidth<500?Math.min(window.innerWidth-40,340):380,o=typeof window<"u"?Math.min(window.innerHeight-80,500):500,n=this.config.styles||{},i=n.border||`2px solid ${n.primaryColor||"#15d5ff"}`,l=n.boxShadow||"0 4px 16px rgba(0,0,0,0.5)",a=n.textColor||"#fff",s=n.fontFamily||"-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",r=n.fontSize||"13px",d=n.backgroundColor||"#1b1b1b";return`
      position: fixed;
      top: 20px;
      right: 20px;
      width: ${t}px;
      max-height: ${o}px;
      background: ${d};
      border: ${i};
      border-radius: 8px;
      box-shadow: ${l};
      z-index: ${this.config.integration?.zIndexBase||2147483647};
      isolation: isolate;
      pointer-events: auto;
      font-family: ${s};
      font-size: ${r};
      color: ${a};
      overflow: hidden;
      transform: translateX(100%);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    `}generatePanelHTML(){const e=this.config.integration?.cssPrefix||"vimeo",t=this.config.labels||{},o=this.config.styles||{},n=o.headerBackground||"linear-gradient(135deg, #333, #222)",i=o.headerBorder||"1px solid #444",l=o.primaryColor||"#15d5ff",a="#13b1d5",s=typeof window<"u"?Math.min(window.innerHeight-80,500):500;return`
      <div id="${e}-download-manager-header" style="
        background: ${n};
        color: white;
        padding: 8px 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        cursor: pointer;
        user-select: none;
        border-bottom: ${i};
      ">
        <div id="${e}-download-manager-title">${t.title||"📥 Downloads"} (0 active)</div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <button id="${e}-download-manager-cancel-all" title="${t.cancelAll||"Cancel all active downloads"}" style="
            background: #d32f2f;
            border: none;
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 11px;
            transition: background 0.2s ease;
            display: none;
          " onmouseover="this.style.background='#b71c1c'" onmouseout="this.style.background='#d32f2f'">${t.cancelAll||"Cancel All"}</button>
          <button id="${e}-download-manager-clear" title="${t.clearCompleted||"Clear completed"}" style="
            background: ${l};
            border: none;
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 11px;
            transition: background 0.2s ease;
          " onmouseover="this.style.background='${a}'" onmouseout="this.style.background='${l}'">${t.clearCompleted||"Clear"}</button>
          <button id="${e}-download-manager-collapse" title="${t.collapse||"Collapse"}" style="
            background: rgba(255,255,255,0.1);
            border: none;
            color: white;
            font-size: 16px;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            border-radius: 3px;
            transition: background 0.2s ease;
          " onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">−</button>
        </div>
      </div>
      <div id="${e}-download-manager-content" style="
        max-height: ${s-50}px;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: #666 transparent;
        background: #1b1b1b;
      "></div>
      <style>
        #${e}-download-manager-content::-webkit-scrollbar { width: 6px; }
        #${e}-download-manager-content::-webkit-scrollbar-track { background: #1b1b1b; }
        #${e}-download-manager-content::-webkit-scrollbar-thumb { background: #666; border-radius: 3px; }
        #${e}-download-manager-content::-webkit-scrollbar-thumb:hover { background: #888; }
      </style>
    `}cacheElements(){const e=this.config.integration?.cssPrefix||"vimeo";this.elements.header=document.getElementById(`${e}-download-manager-header`),this.elements.title=document.getElementById(`${e}-download-manager-title`),this.elements.content=document.getElementById(`${e}-download-manager-content`),this.elements.clearBtn=document.getElementById(`${e}-download-manager-clear`),this.elements.cancelAllBtn=document.getElementById(`${e}-download-manager-cancel-all`),this.elements.collapseBtn=document.getElementById(`${e}-download-manager-collapse`)}bindEvents(){this.elements.collapseBtn&&this.elements.collapseBtn.addEventListener("click",e=>{e.stopPropagation(),this.dispatchControlEvent("toggle",{},()=>{typeof this.onToggleVisibility=="function"?this.onToggleVisibility():this.hidePanel()})}),this.elements.header&&this.elements.header.addEventListener("click",()=>{this.dispatchControlEvent("toggle",{},()=>{typeof this.onToggleVisibility=="function"?this.onToggleVisibility():this.isCollapsed?this.showPanel():this.hidePanel()})}),this.elements.clearBtn&&this.elements.clearBtn.addEventListener("click",()=>{this.dispatchControlEvent("clearCompleted",{},()=>{typeof this.onClearCompleted=="function"&&this.onClearCompleted()})}),this.elements.cancelAllBtn&&this.elements.cancelAllBtn.addEventListener("click",()=>{this.dispatchControlEvent("cancelAll",{},()=>{typeof this.onCancelAll=="function"&&this.onCancelAll()})})}showPanel(){this.panel&&(this.panel.style.display="block",this.panel.style.transform="translateX(0%)",this.panel.style.opacity="1",this.panel.style.pointerEvents="auto",this.isCollapsed=!1,this.isHidden=!1)}hidePanel(){this.panel&&(this.panel.style.display="block",this.panel.style.transform="translateX(100%)",this.panel.style.opacity="0",this.panel.style.pointerEvents="none",this.isCollapsed=!0)}setHidden(e){if(!this.panel)return;!!e?(this.panel.style.display="none",this.panel.style.pointerEvents="none",this.isHidden=!0):(this.panel.style.display="block",this.isHidden=!1,this.isCollapsed?this.hidePanel():this.showPanel())}updateHeader(e){const t=this.config.labels||{},o=e.active>0?(t.activeDownloads||"({count} active)").replace("{count}",e.active):t.noActiveDownloads||"(none)";this.elements.title&&(this.elements.title.textContent=`${t.title||"📥 Downloads"} ${o}`),this.elements.cancelAllBtn&&(this.elements.cancelAllBtn.style.display=e.active>1?"inline-block":"none")}addOrUpdateItem(e,t){const o=this.config.integration?.cssPrefix||"vimeo",n=this.elements.content.querySelector(`[data-id="${e}"]`),i=this.config.styles&&this.config.styles.primaryColor||"#15d5ff",l="#13b1d5",a=s=>`
        <div class="dm-item" data-id="${e}" style="
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 8px;
          border-bottom: 1px solid #333;
          padding: 10px 12px;
        ">
          <div>
            <div class="dm-fn" style="color:#fff; font-weight:600; font-size:13px;">${(s.filename||"Video").toString().replace(/</g,"&lt;")}</div>
            <div class="dm-st" style="color:#aaa; font-size:12px; margin-top:3px;">${s.status||"Downloading..."}</div>
            <div class="dm-pb" style="height:6px; background:#2a2a2a; border-radius:3px; overflow:hidden; margin-top:8px;">
              <div class="dm-pf" style="height:100%; width:${Math.max(0,Math.min(100,s.progress||0))}%; background:${i};"></div>
            </div>
          </div>
          <div style="display:flex; gap:6px; align-items:center;">
            <button class="dm-cancel" title="Cancel" style="
              background:#d32f2f; color:#fff; border:none; border-radius:4px; padding:4px 8px; font-size:11px; cursor:pointer;"
              onmouseover="this.style.background='#b71c1c'" onmouseout="this.style.background='#d32f2f'">✕</button>
            <button class="dm-remove" title="Remove" style="
              background:${i}; color:#fff; border:none; border-radius:4px; padding:4px 8px; font-size:11px; cursor:pointer;"
              onmouseover="this.style.background='${l}'" onmouseout="this.style.background='${i}'">✔</button>
          </div>
        </div>
      `;if(n)this.applyItemState(n,t);else{const s=document.createElement("div");s.innerHTML=a(t);const r=s.firstElementChild;this.elements.content.prepend(r),this.applyItemState(r,t),r.querySelector(".dm-cancel").addEventListener("click",d=>{d.stopPropagation(),this.dispatchControlEvent("cancelDownload",{downloadId:e},()=>{typeof this.onCancelItem=="function"&&this.onCancelItem(e)})}),r.querySelector(".dm-remove").addEventListener("click",d=>{d.stopPropagation(),this.dispatchControlEvent("removeDownload",{downloadId:e},()=>{typeof this.onRemoveItem=="function"&&this.onRemoveItem(e)})})}}removeDownloadItem(e){const t=this.elements.content?.querySelector(`[data-id="${e}"]`);t&&t.remove()}renderDownloads(e){e.forEach((o,n)=>this.addOrUpdateItem(n,o));const t=new Set(Array.from(e.keys()));this.elements.content.querySelectorAll("[data-id]")?.forEach(o=>{const n=o.getAttribute("data-id");t.has(n)||o.remove()})}updateUI(e,t){this.updateHeader(e),this.renderDownloads(t)}applyItemState(e,t){if(!e)return;const o=this.config.styles&&this.config.styles.primaryColor||"#15d5ff",n=!!t.awaitingUserInteraction,i=String(t.status||"").toLowerCase(),l=i.includes("failed")||i.includes("error")||i.includes("interrupted"),a=t.isCancelled||i.includes("cancelled")||i.includes("canceled"),s=t.isCompleted||!n&&(t.progress||0)>=100,r=e.querySelector(".dm-fn"),d=e.querySelector(".dm-st"),h=e.querySelector(".dm-pf"),c=e.querySelector(".dm-cancel"),m=e.querySelector(".dm-remove");if(r&&(r.textContent=t.filename||"Video"),d&&(d.textContent=t.status||(n?"Waiting for Save As...":"")),h){const f=Math.max(0,Math.min(100,t.progress||0));h.style.width=`${f}%`;let p=o;l?p="#f44336":a?p="#ff9800":s?p="#4caf50":n&&(p="#ffa000"),h.style.background=p}c&&(s||a||l?c.style.display="none":(c.style.display="inline-flex",c.disabled=n,c.textContent=n?"WAIT":"STOP",c.title=n?"Waiting for Save As... (choose a location to finish)":this.config.labels?.cancel||"Cancel",c.style.background=n?"#ffa000":"#d32f2f",c.style.cursor=n?"default":"pointer")),m&&(s||a||l?m.style.display="inline-flex":m.style.display="none")}dispatchControlEvent(e,t={},o=null){if(!e||typeof document>"u"){typeof o=="function"&&o();return}const n={action:e,...t};try{document.dispatchEvent(new CustomEvent(u,{detail:n}))}catch{}!n.__handled&&typeof o=="function"&&o()}}
