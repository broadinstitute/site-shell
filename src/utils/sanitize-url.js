/**
 * Sanitizes untrusted link URLs from config.
 * Allows common navigation targets while blocking executable URI schemes.
 */
export function sanitizeUrl(url) {
    if (typeof url !== "string") return "";

    const value = url.trim();
    if (!value) return "";

    // Remove control chars and whitespace to catch obfuscated schemes.
    const normalized = value
        .replace(/[\u0000-\u001F\u007F\s]+/g, "")
        .toLowerCase();
    if (/^(javascript|data|vbscript):/.test(normalized)) {
        return "";
    }

    return value;
}
