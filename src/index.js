import './styles.css';

import { initScriptBase } from './utils/script-base.js';
import { initShell } from './shell.js';

initScriptBase();

if (document.readyState !== 'loading') {
  initShell();
} else {
  document.addEventListener('DOMContentLoaded', initShell);
}
