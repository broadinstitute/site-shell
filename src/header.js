import { resolveAsset } from "./utils/resolve-asset.js";
import { escapeHtml, sanitizeUrl } from "./utils/sanitize-url.js";
import { resolveSiteUrl } from "./utils/site-url.js";

function isActive(itemPath, currentUrl) {
    /*
    to dynamically set navigation itema to active state when on a page
    we check for the substring of each links path in the current url.
    to mitigate false-positives (like '/page' activating when url is '/page2' for example)
    we check for common url boundary characters (?#/&).
    */
    if (!itemPath) return false;
    const escaped = itemPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`${escaped}($|[?#/&])`);
    return pattern.test(currentUrl);
}

function buildMenu(menu, domain) {
    //get current url
    const currentUrl = window.location.href;
    //build the menu
    const items = menu
        .map((item) => {
            const itemHref = resolveSiteUrl(item.path, domain);
            const submenu = item.submenu?.length
                ? `
            <div class="submenu">
                ${item.submenu
                    .map(
                        (sub) => `
                <a class="submenu-item ${isActive(resolveSiteUrl(sub.path, domain), currentUrl) ? "active" : ""}" href="${escapeHtml(resolveSiteUrl(sub.path, domain))}">
                    ${escapeHtml(sub.label)}
                </a>
                `,
                    )
                    .join("")}
            </div>
            `
                : "";

            return `
        <div class="menu-item-wrapper ${isActive(itemHref, currentUrl) ? "active" : ""}" data-path="${escapeHtml(itemHref)}">
            ${
                item.path
                    ? `<a class="menu-item" href="${escapeHtml(itemHref)}">${escapeHtml(item.label)}</a>`
                    : `<div class="menu-item">${escapeHtml(item.label)}</div>`
            }
            ${submenu}
        </div>
        `;
        })
        .join("");

    return `
    <div class="main-menu">
        ${items}
    </div>
    `;
}

export function renderHeader(config) {
    setTimeout(() => {
        updateActiveMenu();
        watchUrlChanges();
    }, 0);

    return `
    <header class="site-header">
        <div class="nav">
            <div class="nav-left">
                <img src="${escapeHtml(sanitizeUrl(resolveAsset(config.cfde_logo)))}"/>
                <img src="${escapeHtml(sanitizeUrl(resolveAsset(config.tissue_logo)))}"/>
            </div>
            <a class="nav-title" href="${escapeHtml(resolveSiteUrl("/", config.domain))}">
                <!--<img src="images/title.png" />-->
                <div class="title-group">
                    <div class="title-cfde">CFDE</div>
                    <div class="title-name">${escapeHtml(config.tissue)}<br/>Resource</div>
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
                        ${buildMenu(config.menu, config.domain)}
                    </div>
                    <div class="top-menu">
                        <div class="menu-item">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#2C5D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#2C5D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            Login
                        </div>
                    </div>
                </div>
            </div>
            <div class="nav-right">
                <cfde-wheel size="30"></cfde-wheel>
            </div>
        </div>
    </header>
    `;
}

/*
the following are used to update 'active' menu items
when the url changes, but the page doesnt refresh
*/
function watchUrlChanges() {
    window.addEventListener("popstate", updateActiveMenu);
}

function updateActiveMenu() {
    const currentUrl = window.location.href;
    // update submenu items
    document.querySelectorAll(".submenu-item").forEach((link) => {
        const href = link.getAttribute("href");
        const active = isActive(href, currentUrl);
        link.classList.toggle("active", active);
    });
    document.querySelectorAll(".menu-item-wrapper").forEach((link) => {
        const href = link.getAttribute("data-path");
        const active = isActive(href, currentUrl);
        link.classList.toggle("active", active);
    });
}
