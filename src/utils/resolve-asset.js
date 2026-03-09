import { getScriptBase } from './script-base.js';

/**
 * Resolves asset paths from config in header.js and footer.js.
 * Allows multiple ways to specify asset paths.
 */
export function resolveAsset(path) {
  if (!path || typeof path !== 'string') return '';

  // Block javascript: and data: URIs
  if (/^(javascript|data):/i.test(path.trim())) return '';

  // Absolute URLs (e.g. https://.../logo.png)
  if (/^(https?:)?\/\//.test(path)) {
    return path;
  }

  // Host-root paths (e.g. /assets/logo.png)
  if (path.startsWith('/')) {
    return path;
  }

  // Widget-relative paths (e.g. assets/logo.png)
  const base = getScriptBase();
  return base + path;
}
