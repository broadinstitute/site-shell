(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.cfde__site-shell{--cfde-blue: #2C5D8B;--cfde-lite-blue: #4681b9;--nav-shadow: rgba(50, 50, 93, .25) 0px 2px 5px -1px, rgba(0, 0, 0, .3) 0px 1px 3px -1px;--foot-shadow: inset rgba(50, 50, 93, 1) 0px 2px 5px -1px, rgba(0, 0, 0, .3) 0px 1px 3px -1px;--hamburger-size: clamp(14px, 10vmin, 26px);padding:70px 0 0;margin:0;width:100%;min-height:100vh;display:flex;flex-direction:column;justify-content:space-between;font-family:Arial,Helvetica,sans-serif;font-size:14px}.cfde__site-shell,.cfde__site-shell *,.cfde__site-shell *:after,.cfde__site-shell *:before{box-sizing:border-box}.cfde__site-shell #site-header{flex:0 0 auto;width:100%;min-width:100%;background:none;position:fixed;top:0;z-index:999;padding:5px 5px 0;background:#ffffffe6;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.cfde__site-shell #site-header .nav{display:flex;height:60px;border-radius:40px;box-shadow:var(--nav-shadow);position:relative}.cfde__site-shell #site-header .nav-left,.cfde__site-shell #site-header .nav-title,.cfde__site-shell #site-header .nav-right{display:flex;padding:15px}.cfde__site-shell #site-header .nav-left{gap:15px}.cfde__site-shell #site-header .nav-title{background:var(--cfde-blue);text-decoration:none}.cfde__site-shell #site-header .nav-title:hover{background:var(--cfde-lite-blue)}.cfde__site-shell #site-header .nav-menu{padding:0 0 0 15px;display:flex;width:100%;flex:1;position:relative}.cfde__site-shell #site-header .nav img{height:30px;width:auto}.cfde__site-shell #site-header .nav-hamburger{align-self:center;display:none}.cfde__site-shell #site-header #hamburger-toggle{opacity:0;cursor:pointer;position:absolute}.cfde__site-shell #site-header #hamburger{display:block;padding:.5rem;cursor:pointer;width:var(--hamburger-size);height:var(--hamburger-size);box-sizing:content-box;transition:transform .2s ease}.cfde__site-shell #site-header #hamburger .slice{--slice-height: 3px;display:block;position:relative;width:100%;height:var(--slice-height, 2px);border-radius:var(--slice-height);transition:all .2s ease;background-color:var(--cfde-blue);opacity:90%}.cfde__site-shell #site-header #hamburger .slice{margin-top:22%;margin-top:calc(33% - var(--slice-height));top:calc((33% - var(--slice-height)) / -2)}.cfde__site-shell #site-header .nav-hamburger:has(#hamburger-toggle:checked)+.menu-wrapper{display:flex}.cfde__site-shell #site-header #hamburger-toggle:checked~#hamburger .slice:nth-child(1){top:calc(50% - 33% + var(--slice-height) / 2);transform:rotate(45deg)}.cfde__site-shell #site-header #hamburger-toggle:checked~#hamburger .slice:nth-child(2){opacity:0}.cfde__site-shell #site-header #hamburger-toggle:checked~#hamburger .slice:nth-child(3){top:calc(-50% + var(--slice-height) / 2);transform:rotate(-45deg)}.cfde__site-shell #site-header .menu-wrapper{display:flex;width:100%;flex:1;justify-content:space-between}.cfde__site-shell #site-header .main-menu{display:flex;width:100%;flex:1;align-items:center;height:100%}.cfde__site-shell #site-header .top-menu{display:flex;width:100%;flex:1;align-items:center;justify-content:flex-end}.cfde__site-shell #site-header .title-group{color:#fff;font-weight:700;display:flex;align-items:center}.cfde__site-shell #site-header .title-cfde{transform:rotate(-90deg);transform-origin:center;font-size:.7em;line-height:.7em;margin:-.7em}.cfde__site-shell #site-header .title-name{line-height:1em}.cfde__site-shell #site-header .menu-item-wrapper{position:relative;height:100%}.cfde__site-shell #site-header .submenu{position:absolute;top:100%;right:0;padding:10px 15px 15px;border-radius:0 0 10px 10px;width:max-content;display:none;flex-direction:column;gap:0;background:var(--cfde-blue);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);box-shadow:var(--nav-shadow)}.cfde__site-shell #site-header .menu-item-wrapper:hover>.submenu{display:flex}.cfde__site-shell #site-header .menu-item{display:flex;align-items:center;font-weight:700;padding:10px;height:100%;white-space:nowrap}.cfde__site-shell #site-header .menu-item svg{height:1em;width:autp;margin:0 3px 0 0;object-fit:contain}.cfde__site-shell #site-header .menu-item-wrapper:hover .menu-item,.cfde__site-shell #site-header .menu-item-wrapper.active .menu-item,.cfde__site-shell #site-header .menu-item-wrapper:has(.submenu-item.active) .menu-item{background:var(--cfde-blue);color:#fff!important}.cfde__site-shell #site-header .menu-item,.cfde__site-shell #site-header .submenu-item{cursor:pointer;font-size:1em;color:var(--cfde-blue)!important}.cfde__site-shell #site-header .submenu-item{color:#fff!important;padding:5px}.cfde__site-shell #site-header .top-menu .menu-item{font-size:1em;font-weight:400;border-top:5px solid transparent;border-bottom:5px solid transparent}.cfde__site-shell #site-header .top-menu .menu-item:hover{border-top:5px solid var(--cfde-blue);border-bottom:5px solid transparent}.cfde__site-shell #site-header .menu-item-wrapper:has(.submenu)>.menu-item:after{content:"";margin:0 0 0 3px;width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;border-top:6px solid var(--cfde-blue);transform-origin:50% 66.66%;animation:spin 2s linear infinite}.cfde__site-shell #site-header .menu-item-wrapper:hover:has(.submenu)>.menu-item:after,.cfde__site-shell #site-header .menu-item-wrapper.active:has(.submenu)>.menu-item:after,.cfde__site-shell #site-header .menu-item-wrapper:has(.submenu-item.active)>.menu-item:after{border-top-color:#fff}.cfde__site-shell #site-header a.menu-item,.cfde__site-shell #site-header a.submenu-item{text-decoration:none}.cfde__site-shell #site-header a.submenu-item:visited{color:#fff}.cfde__site-shell #site-header a.submenu-item:hover,.cfde__site-shell #site-header a.submenu-item.active{text-decoration:underline}.cfde__site-shell #site-header .hero-title{font-size:2.5em;font-weight:700;line-height:1em;letter-spacing:-.02em}.cfde__site-shell #site-header .hero-body{font-size:1.1em;line-height:1.2em}@media only screen and (max-width:1100px){.cfde__site-shell #site-header .site-header:has(#hamburger-toggle:checked){height:100vh}.cfde__site-shell #site-header .nav:has(#hamburger-toggle:checked){height:60px;background:#fff;-webkit-backdrop-filter:none;backdrop-filter:none;border-radius:40px 40px 0 0}.cfde__site-shell #site-header .nav-menu{justify-content:flex-end}.cfde__site-shell #site-header .nav-hamburger{display:flex}.cfde__site-shell #site-header .menu-wrapper{position:absolute;top:100%;right:-60px;padding:20px;flex-direction:column-reverse;background:#fff;border-radius:0 0 40px 40px;width:auto;min-width:calc(100vw - 10px);box-shadow:var(--nav-shadow);max-height:calc(100vh - 70px);overflow-y:scroll;display:none}.cfde__site-shell #site-header .main-menu{flex-direction:column;align-items:flex-start;flex:auto}.cfde__site-shell #site-header .top-menu{flex-direction:column;align-items:flex-start;flex:auto;width:100%}.cfde__site-shell #site-header .submenu{display:flex;position:relative;background:#fff;box-shadow:none;padding:5px 20px;width:100%}.cfde__site-shell #site-header .menu-item-wrapper{display:flex;flex-direction:column;width:100%}.cfde__site-shell #site-header .top-menu .menu-item{border:0;width:100%}.cfde__site-shell #site-header .top-menu .menu-item:hover{border:0}.cfde__site-shell #site-header .menu-item{padding:5px}.cfde__site-shell #site-header .menu-item-wrapper:hover .menu-item,.cfde__site-shell #site-header .menu-item-wrapper.active .menu-item,.cfde__site-shell #site-header .menu-item-wrapper:has(.submenu-item.active) .menu-item{background:#fff;color:var(--cfde-blue)}.cfde__site-shell #site-header .menu-item-wrapper:has(.submenu)>.menu-item:after{display:none}.cfde__site-shell #site-header a.menu-item,.cfde__site-shell #site-header a.submenu-item{color:var(--cfde-blue);text-decoration:none}.cfde__site-shell #site-header a.menu-item,.cfde__site-shell #site-header a.submenu-item:visited{color:var(--cfde-blue)}.cfde__site-shell #site-header a.menu-item,.cfde__site-shell #site-header a.submenu-item:hover{color:var(--cfde-lite-blue)}.cfde__site-shell #site-header .hero-title{font-size:1.8em}.cfde__site-shell #site-header .hero-body{font-size:1em}}.cfde__site-shell #site-footer{flex:0 0 auto;width:100%;min-width:100vw;background:var(--cfde-blue);padding:50px;color:#fff;font-size:.9em}.cfde__site-shell #site-footer .footer-container{display:flex;flex-direction:column;gap:40px;max-width:1200px;margin:0 auto}.cfde__site-shell #site-footer .footer-nav{display:flex;gap:40px}.cfde__site-shell #site-footer .footer-menu{display:flex;flex-wrap:nowrap;gap:20px}.cfde__site-shell #site-footer .footer-menu>*{flex:1;min-width:125px}.cfde__site-shell #site-footer .footer-menu a,.cfde__site-shell #site-footer .footer-menu a:visited{color:#fff!important;text-decoration:none}.cfde__site-shell #site-footer .footer-menu a:hover{color:#fff}.cfde__site-shell #site-footer .footer-menu a[href]:hover{color:#fff;text-decoration:underline;cursor:pointer}.cfde__site-shell #site-footer .footer-inset{display:flex;justify-content:space-between;align-items:center;gap:20px;background:#fff;padding:20px 40px;color:#000;border-radius:50px;box-shadow:var(--foot-shadow)}@media only screen and (max-width:1100px){.cfde__site-shell #site-footer .footer-nav{flex-direction:column}.cfde__site-shell #site-footer .footer-menu{flex-wrap:wrap}.cfde__site-shell #site-footer .footer-inset{flex-direction:column;align-items:center}}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
(function(){"use strict";var l=typeof document<"u"?document.currentScript:null;let c="";function h(){if(c)return;if(document.currentScript?.src){c=document.currentScript.src.replace(/[^/]+$/,"");return}try{if(l&&l.tagName.toUpperCase()==="SCRIPT"&&l.src||new URL("site-shell.js",document.baseURI).href){c=(l&&l.tagName.toUpperCase()==="SCRIPT"&&l.src||new URL("site-shell.js",document.baseURI).href).replace(/[^/]+$/,"");return}}catch{}const e=document.querySelector('script[src*="site-shell"]');if(e?.src){c=e.src.replace(/[^/]+$/,"");return}console.warn("[site-shell] Could not detect script base path")}function v(){return c}async function m(e){let t;try{t=await fetch(e)}catch(s){return console.error(`[site-shell] Network error loading config from ${e}:`,s),u()}if(!t.ok)return console.error(`[site-shell] Config load failed: ${t.status} from ${e}`),u();let r;try{r=await t.json()}catch(s){return console.error(`[site-shell] Invalid JSON in config from ${e}:`,s),u()}return w(r)}function w(e){return{...e,tissue:e.tissue||"",menu:Array.isArray(e.menu)?e.menu:[],cfde_logo:e.cfde_logo||"",tissue_logo:e.tissue_logo||"",cfde_wheel:e.cfde_wheel||"",nih_logo:e.nih_logo||"",drc_logo:e.drc_logo||"",kc_logo:e.kc_logo||"",footer:e.footer||""}}function u(){return{tissue:"",menu:[],cfde_logo:"",tissue_logo:"",cfde_wheel:"",nih_logo:"",drc_logo:"",kc_logo:"",footer:""}}function a(e){if(!e||typeof e!="string"||/^(javascript|data):/i.test(e.trim()))return"";if(/^(https?:)?\/\//.test(e)||e.startsWith("/"))return e;const t=v();return new URL("../public/",t).href+e}function n(e){if(typeof e!="string")return"";const t=e.trim();if(!t)return"";const r=t.replace(/[\u0000-\u001F\u007F\s]+/g,"").toLowerCase();return/^(javascript|data|vbscript):/.test(r)?"":t}function i(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function d(e,t){if(!e)return!1;const r=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return new RegExp(`${r}($|[?#/&])`).test(t)}function b(e){const t=window.location.href;return`
    <div class="main-menu">
        ${e.map(s=>{const o=s.submenu?.length?`
            <div class="submenu">
                ${s.submenu.map(p=>`
                <a class="submenu-item ${d(p.path,t)?"active":""}" href="${i(n(p.path))}">
                    ${i(p.label)}
                </a>
                `).join("")}
            </div>
            `:"";return`
        <div class="menu-item-wrapper ${d(s.path,t)?"active":""}">
            ${s.path?`<a class="menu-item" href="${i(n(s.path))}">${i(s.label)}</a>`:`<div class="menu-item">${i(s.label)}</div>`}
            ${o}
        </div>
        `}).join("")}
    </div>
    `}function $(e){return setTimeout(()=>{g(),C()},0),`
    <header class="site-header">
        <div class="nav">
            <div class="nav-left">
                <img src="${i(n(a(e.cfde_logo)))}"/>
                <img src="${i(n(a(e.tissue_logo)))}"/>
            </div>
            <a class="nav-title" href="/">
                <!--<img src="images/title.png" />-->
                <div class="title-group">
                    <div class="title-cfde">CFDE</div>
                    <div class="title-name">${i(e.tissue)}<br/>Resource</div>
                </div>
            </a>
            <div class="nav-menu">
                <div class="nav-hamburger">
                    <input type="checkbox" id="hamburger-toggle" />
                    <label for="hamburger-toggle" id="hamburger">
                        <span class="slice"></span>
                        <span class="slice"></span>
                        <span class="slice"></span>
                    </label>
                </div>
                <div class="menu-wrapper">
                    <div class="main-menu">
                        ${b(e.menu)}
                    </div>
                    <div class="top-menu">
                        <div class="menu-item">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#2C5D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            Search
                        </div>
                        <div class="menu-item">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#2C5D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#2C5D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            Login
                        </div>
                    </div>
                </div>
            </div>
            <div class="nav-right">
                <img src="${i(n(a(e.cfde_wheel)))}" />
            </div>
        </div>
    </header>
    `}function C(){window.addEventListener("popstate",g)}function g(){const e=window.location.href;document.querySelectorAll(".submenu-item").forEach(t=>{const r=t.getAttribute("href"),s=d(r,e);t.classList.toggle("active",s)}),document.querySelectorAll(".menu-item-wrapper").forEach(t=>{const r=t.getAttribute("href"),s=d(r,e);t.classList.toggle("active",s)})}function _(e){return`
    <div class="footer-menu">
        ${e.map(r=>{const s=r.submenu?.length?`
            ${r.submenu.map(o=>`
              <a class="" href="${i(n(o.path))}">
                  ${i(o.label)}
              </a>
            `).join("")}
            `:"";return`
        <div style="display:flex; flex-direction:column; gap:3px">
            ${r.path?`<a style="font-weight:bold" href="${i(n(r.path))}">${i(r.label)}</a>`:`<a style="font-weight:bold">${i(r.label)}</a>`}
            ${s}
        </div>
        `}).join("")}
    </div>
    `}function y(e){return`
    <footer class="footer-container">
      <div class="footer-nav">
          <div>
              <div class="bold">CFDE Liver Resource</div>
              <div>
                  An NIH-funded research initiative providing comprehensive liver research resources, data visualization tools, and collaborative research infrastructure.
              </div>
          </div>
          ${_(e.menu)}
      </div>
      <div class="footer-inset">
          <div style="background: white; height:50px">
              <img src="${i(n(a(e.nih_logo)))}" style="height: 50px;"/>
          </div>
          <div class="f-col fill-width align-v-center" style="gap:10px; font-size: .9em;">
              <div>
                  CFDE Liver Resource is supported by the NIH Common Fund as a part of the Common Fund Data Ecosystem.<br/>Award Numbers <a href="https://reporter.nih.gov/project-details/OT2OD036435" target="_blank" rel="noopener noreferrer">OT2OD036435</a> and <a href="https://reporter.nih.gov/project-details/OT2OD036440" target="_blank" rel="noopener noreferrer">OT2OD036440</a>.
              </div>
          </div>
          <div class="f-row align-v-center" style="gap:10px">
              <a href="https://data.cfde.cloud/" target="_blank">
                <img src="${i(n(a(e.drc_logo)))}"  style="height:50px"/>
              </a>
              <a href="https://cfdeknowledge.org/" target="_blank">
                <img src="${i(n(a(e.kc_logo)))}" style="height:50px"/>
              </a>
          </div>
      </div>
      <div class="f-row fill-width align-h-center" style="font-size: 0.8em; text-align: center;">
          ©2026 CFDE Liver Resource. A project of the NIH Common Fund Data Ecosystem. All rights reserved.
      </div>
  </footer>
  `}async function f(){const e=document.getElementById("site-header"),t=document.getElementById("site-footer");if(!e&&!t){console.warn("[site-shell] No #site-header or #site-footer found");return}try{const r=e?.getAttribute("data-config-url")||a("config/site-config.json"),s=await m(r);if(e){e.innerHTML=$(s);const o=e.parentElement;o&&!o.classList.contains("cfde__site-shell")&&o.classList.add("cfde__site-shell")}t&&(t.innerHTML=y(s))}catch(r){console.error("[site-shell] Failed to initialize:",r)}}h(),document.readyState!=="loading"?f():document.addEventListener("DOMContentLoaded",f)})();
