
import { resolveAsset } from "./utils/resolve-asset.js"
import { escapeHtml, sanitizeUrl } from "./utils/sanitize-url.js"

function buildMenu(menu) {
    //build the menu
    const items = menu.map(item => {
        const submenu = item.submenu?.length
            ? `
            ${item.submenu.map(sub => `
              <a class="" href="${escapeHtml(sanitizeUrl(sub.path))}">
                  ${escapeHtml(sub.label)}
              </a>
            `).join("")}
            `
            : ""

        return `
        <div style="display:flex; flex-direction:column; gap:3px">
            ${
                item.path
                ? `<a style="font-weight:bold" href="${escapeHtml(sanitizeUrl(item.path))}">${escapeHtml(item.label)}</a>`
                : `<a style="font-weight:bold">${escapeHtml(item.label)}</a>`
            }
            ${submenu}
        </div>
        `
    }).join("")

    return `
    <div class="footer-menu">
        ${items}
    </div>
    `
}

export function renderFooter(config) {
  return `
    <footer class="footer-container">
      <div class="footer-nav">
          <div>
              <div class="bold">CFDE Liver Resource</div>
              <div>
                  An NIH-funded research initiative providing comprehensive liver research resources, data visualization tools, and collaborative research infrastructure.
              </div>
          </div>
          ${buildMenu(config.menu)}
      </div>
      <div class="footer-inset">
          <div style="background: white; height:50px">
              <img src="${escapeHtml(sanitizeUrl(resolveAsset(config.nih_logo)))}" style="height: 50px;"/>
          </div>
          <div class="f-col fill-width align-v-center" style="gap:10px; font-size: .9em;">
              <div>
                  CFDE Liver Resource is supported by the NIH Common Fund as a part of the Common Fund Data Ecosystem.<br/>Award Numbers <a href="https://reporter.nih.gov/project-details/OT2OD036435" target="_blank" rel="noopener noreferrer">OT2OD036435</a> and <a href="https://reporter.nih.gov/project-details/OT2OD036440" target="_blank" rel="noopener noreferrer">OT2OD036440</a>.
              </div>
          </div>
          <div class="f-row align-v-center" style="gap:10px">
              <a href="https://data.cfde.cloud/" target="_blank">
                <img src="${escapeHtml(sanitizeUrl(resolveAsset(config.drc_logo)))}"  style="height:50px"/>
              </a>
              <a href="https://cfdeknowledge.org/" target="_blank">
                <img src="${escapeHtml(sanitizeUrl(resolveAsset(config.kc_logo)))}" style="height:50px"/>
              </a>
          </div>
      </div>
      <div class="f-row fill-width align-h-center" style="font-size: 0.8em; text-align: center;">
          ©2026 CFDE Liver Resource. A project of the NIH Common Fund Data Ecosystem. All rights reserved.
      </div>
  </footer>
  `
}