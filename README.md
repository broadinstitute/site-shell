# Site Shell v2

A shared, config-driven header and footer shell for multi-team web applications. One script gives every app — React, Vue, Angular, static HTML — the same navigation and branding without touching app content.

## How It Works

```
┌─────────────────────────────────┐
│  #site-header                   │  ← Shell renders here
├─────────────────────────────────┤
│                                 │
│  Your app (React, Vue, etc.)    │  ← Untouched by the shell
│                                 │
├─────────────────────────────────┤
│  #site-footer                   │  ← Shell renders here
└─────────────────────────────────┘
```

The shell loads a shared `config.json`, builds the header/footer using **DOM API only** (no `innerHTML` — XSS-safe), and injects CSS scoped under `.site-shell` (no global resets that break your app).

---

## Quick Start

### 1. Add the script and containers to your HTML

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="https://cdn.jsdelivr.net/gh/broadinstitute/site-shell@main/dist/site-shell.js"></script>
    </head>
    <body>
        <div id="site-header" data-config-url="/config.json"></div>

        <!-- Your app content — the shell never touches this -->
        <div id="app"></div>

        <div id="site-footer"></div>
    </body>
</html>
```

That's it. The shell auto-initializes on `DOMContentLoaded`.

### 2. Serve a shared config

All apps point to the same config URL (typically served by a reverse proxy):

```json
{
    "tissue": "Liver",
    "cfde_logo": "assets/cfde.png",
    "tissue_logo": "assets/liver.png",
    "cfde_wheel": "assets/cfde_unified_icon.png",
    "nih_logo": "assets/NIH_logo.png",
    "drc_logo": "assets/drc_portrait.png",
    "kc_logo": "assets/cfde_kc_logo_c.png",
    "footer": "© Broad Institute",
    "menu": [
        {
            "label": "About",
            "path": "#about",
            "submenu": [
                { "label": "About the Portal", "path": "#about-the-portal" },
                { "label": "Consortium", "path": "#consortium" }
            ]
        },
        {
            "label": "Liver Atlas",
            "submenu": [
                { "label": "Cell Atlas", "path": "#cell-atlas" },
                { "label": "Functional Atlas", "path": "#functional-atlas" }
            ]
        },
        {
            "label": "Data and Resources",
            "submenu": [
                { "label": "Datasets", "path": "#datasets" },
                { "label": "APIs", "path": "#apis" }
            ]
        }
    ]
}
```

---

## Integration by Tech Stack

### React (Create React App / Vite)

In `public/index.html` (CRA) or `index.html` (Vite):

```html
<head>
    <script src="https://cdn.jsdelivr.net/gh/broadinstitute/site-shell@main/dist/site-shell.js"></script>
</head>
<body>
    <div id="site-header" data-config-url="/config.json"></div>
    <div id="root"></div>
    <div id="site-footer"></div>
</body>
```

No changes to your React code. The shell renders outside `#root`.

### Vue

In `index.html`:

```html
<head>
    <script src="https://cdn.jsdelivr.net/gh/broadinstitute/site-shell@main/dist/site-shell.js"></script>
</head>
<body>
    <div id="site-header" data-config-url="/config.json"></div>
    <div id="app"></div>
    <div id="site-footer"></div>
</body>
```

Vue mounts to `#app`. The shell mounts to `#site-header` and `#site-footer`. They don't interfere.

### Angular

In `src/index.html`:

```html
<head>
    <script src="https://cdn.jsdelivr.net/gh/broadinstitute/site-shell@main/dist/site-shell.js"></script>
</head>
<body>
    <div id="site-header" data-config-url="/config.json"></div>
    <app-root></app-root>
    <div id="site-footer"></div>
</body>
```

### Next.js

In `pages/_document.js` (or `app/layout.tsx`):

```jsx
// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <script src="https://cdn.jsdelivr.net/gh/broadinstitute/site-shell@main/dist/site-shell.js" />
            </Head>
            <body>
                <div id="site-header" data-config-url="/config.json" />
                <Main />
                <div id="site-footer" />
                <NextScript />
            </body>
        </Html>
    );
}
```

### Static HTML / No Framework

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="https://cdn.jsdelivr.net/gh/broadinstitute/site-shell@main/dist/site-shell.js"></script>
    </head>
    <body>
        <div id="site-header" data-config-url="/config.json"></div>

        <main>
            <h1>My Static Page</h1>
            <p>Content goes here.</p>
        </main>

        <div id="site-footer"></div>
    </body>
</html>
```

---

## Configuration Reference

| Field         | Type     | Required | Description                                                                |
| ------------- | -------- | -------- | -------------------------------------------------------------------------- |
| `tissue`      | `string` | No       | Name displayed in the header title (e.g. `"Liver"`)                        |
| `cfde_logo`   | `string` | No       | Path/URL to CFDE logo image                                                |
| `tissue_logo` | `string` | No       | Path/URL to tissue-specific logo                                           |
| `cfde_wheel`  | `string` | No       | Path/URL to CFDE wheel graphic                                             |
| `nih_logo`    | `string` | No       | Path/URL to NIH logo (footer)                                              |
| `drc_logo`    | `string` | No       | Path/URL to DRC logo (footer)                                              |
| `kc_logo`     | `string` | No       | Path/URL to Knowledge Center logo (footer)                                 |
| `footer`      | `string` | No       | Custom copyright/footer text. Falls back to a default CFDE copyright line. |
| `menu`        | `array`  | No       | Navigation menu items (see below)                                          |

### Menu item structure

```json
{
    "label": "Dashboard",
    "path": "/dashboard",
    "submenu": [{ "label": "Overview", "path": "/dashboard/overview" }]
}
```

- `label` — Display text (rendered via `textContent`, safe from XSS)
- `path` — Link URL. Optional — omit for non-clickable parent items that only have a submenu dropdown (e.g. "Liver Atlas" has no `path`, just `submenu`)
- `submenu` — Optional array of child items (one level deep). Parent highlights automatically when any child is active.

### Asset paths

Logo/image paths support three formats:

- **Absolute URL**: `https://cdn.example.com/logo.png`
- **Root-relative**: `/assets/logo.png`
- **Script-relative**: `assets/logo.png` (resolved relative to where `site-shell.js` is hosted)

`javascript:` and `data:` URIs are blocked automatically.

### Container attributes

| Attribute         | Description                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------- |
| `data-config-url` | URL to fetch config JSON from. Defaults to `config/site-config.json` relative to the script. |

---

## Reverse Proxy Setup [Handle by Broad Team]

All teams deploy independently. A single reverse proxy routes by path prefix and serves the shared config:

**Nginx:**

```nginx
server {
    listen 443 ssl;
    server_name app.example.com;

    # Shared config — one file, all apps read it
    location = /config.json { alias /shared/site-config.json; }

    # Route to team apps by prefix
    location /dashboard/ { proxy_pass http://team-a:3000/dashboard/; }
    location /reports/   { proxy_pass http://team-b:3000/reports/; }
    location /admin/     { proxy_pass http://team-c:3000/admin/; }
    location /           { proxy_pass http://team-a:3000/; }
}
```

---

## Testing

### Run the dev server

```bash
cd site-shell
npm install
npm run dev
```

Open `http://localhost:5173` to see the shell with the sample config.

### Build for production

```bash
npm run build
# Output: dist/site-shell.js (single IIFE file with CSS injected)
```

### Test XSS safety

Create a config with a malicious payload and verify it renders as plain text, not executable HTML:

```json
{
    "tissue": "<img src=x onerror=alert('XSS')>",
    "menu": [
        {
            "label": "<script>alert('XSS')</script>",
            "path": "javascript:alert('XSS')"
        }
    ],
    "cfde_logo": "javascript:alert('XSS')"
}
```

**Expected**: The title shows the literal string `<img src=x onerror=alert('XSS')>`. No alert fires. Logo `src` is empty (blocked by URI sanitization). Menu items with unsafe URLs do not get an `href` attribute.

### Test graceful degradation

Stop the config server or point to a bad URL:

```html
<div id="site-header" data-config-url="http://localhost:9999/bad.json"></div>
```

**Expected**: Console shows `[site-shell] Network error loading config...`. No crash. Shell renders empty (default config).

### Test CSS isolation

Load the shell alongside your app and verify no style conflicts:

```html
<head>
    <script src="/dist/site-shell.js"></script>
    <style>
        /* Your app styles — these should NOT be affected */
        .nav {
            background: red;
            padding: 100px;
        }
        .menu-item {
            color: green;
            font-size: 3em;
        }
        a {
            color: purple;
        }
        * {
            margin: 50px;
        }
    </style>
</head>
<body>
    <div id="site-header" data-config-url="/config/site-config.json"></div>
    <div id="app">
        <div class="nav">App nav — should be red with 100px padding</div>
        <div class="menu-item">App item — should be green 3em</div>
    </div>
    <div id="site-footer"></div>
</body>
```

**Expected**: Shell header/footer render normally with blue theme. App content keeps its own red/green styles. No bleed in either direction.

### Test missing containers

```html
<body>
    <!-- No #site-header or #site-footer -->
    <div id="app">Just an app</div>
</body>
```

**Expected**: Console shows `[site-shell] No #site-header or #site-footer found`. No error thrown.

### Test active nav highlighting

Navigate to a URL matching a menu path (e.g. `/dashboard/overview`):

**Expected**: The "Dashboard" menu item and "Overview" submenu item both show active styling.

---

## Architecture

- **No Shadow DOM** — the shell injects into plain `<div>` containers so it works everywhere
- **Config-driven** — all content (labels, logos, links) comes from one shared JSON
- **XSS-safe** — all rendering uses `document.createElement` + `textContent` (never `innerHTML`)
- **CSS-scoped** — BEM naming under `.site-shell`, no global resets
- **Framework-agnostic** — plain JS, works with any tech stack
- **Independent deploys** — each team deploys their own app; the shell script is loaded from CDN/npm

---

## Development

```bash
git clone git@github.com:broadinstitute/site-shell.git
cd site-shell
npm install
npm run dev     # Start dev server at localhost:5173
npm run build   # Build dist/site-shell.js
```

## License

See [LICENSE](./LICENSE).
