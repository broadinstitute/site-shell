/**
 * Loads and validates the site-shell configuration from a URL.
 * Gracefully degrades to defaults on any failure.
 */
export async function loadConfig(url) {
  let res;
  try {
    res = await fetch(url);
  } catch (err) {
    console.error(`[site-shell] Network error loading config from ${url}:`, err);
    return getDefaultConfig();
  }

  if (!res.ok) {
    console.error(`[site-shell] Config load failed: ${res.status} from ${url}`);
    return getDefaultConfig();
  }

  let config;
  try {
    config = await res.json();
  } catch (err) {
    console.error(`[site-shell] Invalid JSON in config from ${url}:`, err);
    return getDefaultConfig();
  }

  return validateConfig(config);
}

function validateConfig(config) {
  return {
    ...config,
    tissue: config.tissue || '',
    menu: Array.isArray(config.menu) ? config.menu : [],
    cfde_logo: config.cfde_logo || '',
    tissue_logo: config.tissue_logo || '',
    cfde_wheel: config.cfde_wheel || '',
    nih_logo: config.nih_logo || '',
    drc_logo: config.drc_logo || '',
    kc_logo: config.kc_logo || '',
  };
}

function getDefaultConfig() {
  return {
    tissue: '',
    menu: [],
    cfde_logo: '',
    tissue_logo: '',
    cfde_wheel: '',
    nih_logo: '',
    drc_logo: '',
    kc_logo: '',
  };
}
