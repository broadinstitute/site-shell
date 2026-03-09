let SCRIPT_BASE = '';

/**
 * Determine the base URL of the script that loaded this widget.
 * Works even after bundling with Vite.
 */
export function initScriptBase() {
  if (SCRIPT_BASE) return;

  // Try document.currentScript first (works for regular <script> tags)
  if (document.currentScript?.src) {
    SCRIPT_BASE = document.currentScript.src.replace(/[^/]+$/, '');
    return;
  }

  // Try import.meta.url (works in ES module context)
  try {
    if (import.meta.url) {
      SCRIPT_BASE = import.meta.url.replace(/[^/]+$/, '');
      return;
    }
  } catch {}

  // Fallback: search for script tag
  const script = document.querySelector('script[src*="site-shell"]');
  if (script?.src) {
    SCRIPT_BASE = script.src.replace(/[^/]+$/, '');
    return;
  }

  console.warn('[site-shell] Could not detect script base path');
}

export function getScriptBase() {
  return SCRIPT_BASE;
}
