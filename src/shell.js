import { loadConfig } from './utils/config-loader.js';
import { resolveAsset } from './utils/resolve-asset.js';
import { renderHeader } from './header.js';
import { renderFooter } from './footer.js';

export async function initShell() {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');

  if (!headerEl && !footerEl) {
    console.warn('[site-shell] No #site-header or #site-footer found');
    return;
  }

  try {
    const configUrl =
      headerEl?.getAttribute('data-config-url') ||
      resolveAsset('config/site-config.json');

    const config = await loadConfig(configUrl);

    if (headerEl) {
      headerEl.innerHTML = renderHeader(config);
      //add '.cfde__site-shell' class to parent element of header/footer
      //this is needed for proper alignment of footer to bottom of page
      const wrapper = headerEl.parentElement;
      if(wrapper && !wrapper.classList.contains('cfde__site-shell')){
        wrapper.classList.add('cfde__site-shell');
      }
    }
    if (footerEl) {
      footerEl.innerHTML = renderFooter(config);
    }
  } catch (err) {
    console.error('[site-shell] Failed to initialize:', err);
  }
}
