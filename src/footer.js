import { resolveAsset } from './utils/resolve-asset.js';

function createFooterMenu(menu) {
  const menuContainer = document.createElement('div');
  menuContainer.className = 'site-shell__footer-menu';

  for (const item of menu) {
    const col = document.createElement('div');
    col.style.cssText = 'display:flex; flex-direction:column; gap:3px';

    const heading = document.createElement('a');
    heading.style.fontWeight = 'bold';
    heading.textContent = item.label || '';
    if (item.path) heading.href = item.path;
    col.appendChild(heading);

    if (item.submenu?.length) {
      for (const sub of item.submenu) {
        const subLink = document.createElement('a');
        subLink.textContent = sub.label || '';
        if (sub.path) subLink.href = sub.path;
        col.appendChild(subLink);
      }
    }

    menuContainer.appendChild(col);
  }

  return menuContainer;
}

/**
 * Renders the footer into the given container element using DOM API (no innerHTML).
 */
export function renderFooter(container, config) {
  container.classList.add('site-shell');

  const footer = document.createElement('footer');
  footer.className = 'site-shell__footer-container';

  // Footer nav section
  const footerNav = document.createElement('div');
  footerNav.className = 'site-shell__footer-nav';

  const descCol = document.createElement('div');
  const descTitle = document.createElement('div');
  descTitle.className = 'site-shell__bold';
  descTitle.textContent = config.tissue ? `CFDE ${config.tissue} Resource` : 'CFDE Resource';
  descCol.appendChild(descTitle);
  const descText = document.createElement('div');
  descText.textContent = 'An NIH-funded research initiative providing comprehensive liver research resources, data visualization tools, and collaborative research infrastructure.';
  descCol.appendChild(descText);
  footerNav.appendChild(descCol);

  footerNav.appendChild(createFooterMenu(config.menu));
  footer.appendChild(footerNav);

  // Footer inset section
  const inset = document.createElement('div');
  inset.className = 'site-shell__footer-inset';

  // NIH logo
  if (config.nih_logo) {
    const nihWrap = document.createElement('div');
    nihWrap.style.cssText = 'background: white; height:50px';
    const nihImg = document.createElement('img');
    nihImg.src = resolveAsset(config.nih_logo);
    nihImg.style.height = '50px';
    nihImg.alt = 'NIH Logo';
    nihWrap.appendChild(nihImg);
    inset.appendChild(nihWrap);
  }

  // Award text
  const awardCol = document.createElement('div');
  awardCol.style.cssText = 'display:flex; flex-direction:column; align-items:center; gap:10px; font-size:.9em';
  const awardText = document.createElement('div');
  awardText.textContent = 'CFDE ' + (config.tissue || '') + ' Resource is supported by the NIH Common Fund as a part of the Common Fund Data Ecosystem.';
  const awardBreak = document.createElement('br');
  awardText.appendChild(awardBreak);

  const awardPrefix = document.createTextNode('Award Numbers ');
  awardText.appendChild(awardPrefix);

  const award1 = document.createElement('a');
  award1.href = 'https://reporter.nih.gov/project-details/OT2OD036435';
  award1.target = '_blank';
  award1.rel = 'noopener noreferrer';
  award1.textContent = 'OT2OD036435';
  awardText.appendChild(award1);

  awardText.append(' and ');

  const award2 = document.createElement('a');
  award2.href = 'https://reporter.nih.gov/project-details/OT2OD036440';
  award2.target = '_blank';
  award2.rel = 'noopener noreferrer';
  award2.textContent = 'OT2OD036440';
  awardText.appendChild(award2);

  awardText.append('.');
  awardCol.appendChild(awardText);
  inset.appendChild(awardCol);

  // Partner logos
  const partnerRow = document.createElement('div');
  partnerRow.style.cssText = 'display:flex; align-items:center; gap:10px';

  if (config.drc_logo) {
    const drcLink = document.createElement('a');
    drcLink.href = 'https://data.cfde.cloud/';
    drcLink.target = '_blank';
    drcLink.rel = 'noopener noreferrer';
    const drcImg = document.createElement('img');
    drcImg.src = resolveAsset(config.drc_logo);
    drcImg.style.height = '50px';
    drcImg.alt = 'DRC Logo';
    drcLink.appendChild(drcImg);
    partnerRow.appendChild(drcLink);
  }

  if (config.kc_logo) {
    const kcLink = document.createElement('a');
    kcLink.href = 'https://cfdeknowledge.org/';
    kcLink.target = '_blank';
    kcLink.rel = 'noopener noreferrer';
    const kcImg = document.createElement('img');
    kcImg.src = resolveAsset(config.kc_logo);
    kcImg.style.height = '50px';
    kcImg.alt = 'Knowledge Center Logo';
    kcLink.appendChild(kcImg);
    partnerRow.appendChild(kcLink);
  }

  inset.appendChild(partnerRow);
  footer.appendChild(inset);

  // Copyright
  const copyright = document.createElement('div');
  copyright.className = 'site-shell__copyright';
  copyright.textContent = '\u00A92026 CFDE ' + (config.tissue || '') + ' Resource. A project of the NIH Common Fund Data Ecosystem. All rights reserved.';
  footer.appendChild(copyright);

  container.appendChild(footer);
}
