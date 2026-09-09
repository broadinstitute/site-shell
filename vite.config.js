import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default {
    define: {
        "import.meta": {},
    },
    plugins: [cssInjectedByJsPlugin()],
    build: {
        lib: {
            entry: "src/index.js",
            name: "SiteShell",
            formats: ["iife"],
            fileName: () => "site-shell.js",
        },
    },
};
