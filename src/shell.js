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

    if (headerEl) renderHeader(headerEl, config);
    if (footerEl) renderFooter(footerEl, config);
  } catch (err) {
    console.error('[site-shell] Failed to initialize:', err);
  }
}
