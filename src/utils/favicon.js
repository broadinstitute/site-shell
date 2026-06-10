import { resolveAsset } from "./resolve-asset.js";

const FAVICON_SELECTOR = 'link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]';
const DEFAULT_FAVICON_PATH = "assets/liver.png";

export function replaceFavicon(path = DEFAULT_FAVICON_PATH) {
  if (typeof document === "undefined") return;

  document.querySelectorAll(FAVICON_SELECTOR).forEach((node) => {
    node.remove();
  });

  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.type = "image/png";
  favicon.href = resolveAsset(path);
  document.head.appendChild(favicon);
}
