import { sanitizeUrl } from "./sanitize-url.js";

const DEFAULT_CFDE_WHEEL_SCRIPT_URL =
  "https://cdn.jsdelivr.net/gh/broadinstitute/cfde-wheel@main/dist/cfde-wheel.js";

let cfdeWheelLoadPromise = null;

export function getCfdeWheelScriptUrl(preferredUrl) {
  const sanitizedPreferredUrl = sanitizeUrl(preferredUrl);
  return sanitizedPreferredUrl || DEFAULT_CFDE_WHEEL_SCRIPT_URL;
}

export function ensureCfdeWheelScript(url) {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return Promise.resolve();
  }

  if (window.CfdeWheel || customElements.get("cfde-wheel")) {
    return Promise.resolve();
  }

  if (cfdeWheelLoadPromise) {
    return cfdeWheelLoadPromise;
  }

  const scriptUrl = getCfdeWheelScriptUrl(url);
  const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);

  cfdeWheelLoadPromise = new Promise((resolve, reject) => {
    const handleLoad = () => resolve();
    const handleError = () => {
      cfdeWheelLoadPromise = null;
      reject(new Error(`[site-shell] Failed to load CFDE wheel script from ${scriptUrl}`));
    };

    if (existingScript) {
      existingScript.addEventListener("load", handleLoad, { once: true });
      existingScript.addEventListener("error", handleError, { once: true });

      if (existingScript.dataset.loaded === "true") {
        resolve();
      }

      return;
    }

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        resolve();
      },
      { once: true }
    );
    script.addEventListener("error", handleError, { once: true });
    document.head.appendChild(script);
  });

  return cfdeWheelLoadPromise;
}
