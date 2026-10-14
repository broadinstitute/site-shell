import "./styles.css";

import { initScriptBase } from "./utils/script-base.js";
import { initShell } from "./shell.js";

function initGoogleAnalytics() {
    const measurementId = "G-4PPVELKK4B";
    window.dataLayer = window.dataLayer || [];
    window.gtag =
        window.gtag ||
        function gtag() {
            window.dataLayer.push(arguments);
        };

    window.gtag("js", new Date());
    window.gtag("config", measurementId);

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
}

initGoogleAnalytics();
initScriptBase();

if (document.readyState !== "loading") {
    initShell();
} else {
    document.addEventListener("DOMContentLoaded", initShell);
}
