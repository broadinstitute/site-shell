import { getScriptBase } from './script-base.js';

/**
 * Resolves asset paths from config 
 * Allows multiple ways to specify asset paths.
 */
export function resolveAsset(path) {
  if (!path || typeof path !== 'string') return '';

  // Block javascript: and data: URIs
  if (/^(javascript|data):/i.test(path.trim())) return '';

  // Absolute config URLs (e.g. https://.../logo.png)
  if (/^(https?:)?\/\//.test(path)) {
    return path;
  }

  // Host-root config paths (e.g. /assets/logo.png)
  if (path.startsWith('/')) {
    return path;
  }

  // Widget-relative config paths (e.g. assets/logo.png)
  // get base url of where this scrip was loaded from
  const base = getScriptBase();
  // generate new url to assets dir relative to the base
  const asset = new URL('../public/', base).href; 
  return asset + path;
}
