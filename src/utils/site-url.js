import { sanitizeUrl } from "./sanitize-url.js";

function normalizeDomain(domain) {
  if (typeof domain !== "string") return "";

  const value = domain.trim();
  if (!value) return "";

  try {
    const url = new URL(value.includes("://") ? value : `https://${value}`);
    return url.hostname.toLowerCase();
  } catch {
    return value.replace(/^https?:\/\//i, "").replace(/\/+$/, "").toLowerCase();
  }
}

function getDomainBaseUrl(domain) {
  if (typeof domain !== "string") return "";

  const value = domain.trim();
  if (!value) return "";

  try {
    const url = new URL(value.includes("://") ? value : `https://${value}`);
    return `${url.protocol}//${url.host}`;
  } catch {
    return `https://${value.replace(/^https?:\/\//i, "").replace(/\/+$/, "")}`;
  }
}

export function shouldUseRelativeUrls(domain) {
  if (typeof window === "undefined") return true;

  const normalizedDomain = normalizeDomain(domain);
  if (!normalizedDomain) return true;

  return window.location.hostname.toLowerCase().includes(normalizedDomain);
}

export function resolveSiteUrl(path, domain) {
  const sanitizedPath = sanitizeUrl(path);
  if (!sanitizedPath) return "";

  if (sanitizedPath === "#") {
    return sanitizedPath;
  }

  if (/^(https?:)?\/\//i.test(sanitizedPath)) {
    return sanitizedPath;
  }

  if (shouldUseRelativeUrls(domain)) {
    return sanitizedPath;
  }

  const baseUrl = getDomainBaseUrl(domain);
  if (!baseUrl) return sanitizedPath;

  if (sanitizedPath.startsWith("#")) {
    return `${baseUrl}/${sanitizedPath}`;
  }

  if (sanitizedPath.startsWith("/")) {
    return `${baseUrl}${sanitizedPath}`;
  }

  return `${baseUrl}/${sanitizedPath}`;
}
