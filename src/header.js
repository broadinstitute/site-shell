import { resolveAsset } from './utils/resolve-asset.js';

function isActive(itemPath, currentUrl) {
  if (!itemPath) return false;
  const escaped = itemPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`${escaped}($|[?#/&])`);
  return pattern.test(currentUrl);
}

function createSubmenu(submenuItems, currentUrl) {
  const container = document.createElement('div');
  container.className = 'site-shell__submenu';

  for (const sub of submenuItems) {
    const link = document.createElement('a');
    link.className = 'site-shell__submenu-item';
    if (isActive(sub.path, currentUrl)) {
      link.classList.add('site-shell__submenu-item--active');
    }
    if (sub.path) link.href = sub.path;
    link.textContent = sub.label || '';
    container.appendChild(link);
  }

  return container;
}

function createMenu(menu, currentUrl) {
  const menuContainer = document.createElement('div');
  menuContainer.className = 'site-shell__main-menu';

  for (const item of menu) {
    const wrapper = document.createElement('div');
    wrapper.className = 'site-shell__menu-item-wrapper';
    if (isActive(item.path, currentUrl)) {
      wrapper.classList.add('site-shell__menu-item-wrapper--active');
    }

    if (item.path) {
      const link = document.createElement('a');
      link.className = 'site-shell__menu-item';
      link.href = item.path;
      link.textContent = item.label || '';
      wrapper.appendChild(link);
    } else {
      const div = document.createElement('div');
      div.className = 'site-shell__menu-item';
      div.textContent = item.label || '';
      wrapper.appendChild(div);
    }

    if (item.submenu?.length) {
      wrapper.appendChild(createSubmenu(item.submenu, currentUrl));
      // Mark parent active if any child is active
      for (const sub of item.submenu) {
        if (isActive(sub.path, currentUrl)) {
          wrapper.classList.add('site-shell__menu-item-wrapper--active');
          break;
        }
      }
    }

    menuContainer.appendChild(wrapper);
  }

  return menuContainer;
}

function createSearchIcon() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z');
  path.setAttribute('stroke', '#2C5D8B');
  path.setAttribute('stroke-width', '2');
  path.setAttribute('stroke-linecap', 'round');
  path.setAttribute('stroke-linejoin', 'round');
  svg.appendChild(path);
  return svg;
}

function createUserIcon() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path1.setAttribute('d', 'M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z');
  path1.setAttribute('stroke', '#2C5D8B');
  path1.setAttribute('stroke-width', '2');
  path1.setAttribute('stroke-linecap', 'round');
  path1.setAttribute('stroke-linejoin', 'round');
  const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path2.setAttribute('d', 'M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z');
  path2.setAttribute('stroke', '#2C5D8B');
  path2.setAttribute('stroke-width', '2');
  path2.setAttribute('stroke-linecap', 'round');
  path2.setAttribute('stroke-linejoin', 'round');
  svg.appendChild(path1);
  svg.appendChild(path2);
  return svg;
}

/**
 * Renders the header into the given container element using DOM API (no innerHTML).
 */
export function renderHeader(container, config) {
  container.classList.add('site-shell');
  const currentUrl = window.location.href;

  const header = document.createElement('header');
  header.className = 'site-shell__header';

  const nav = document.createElement('div');
  nav.className = 'site-shell__nav';

  // Nav left — logos
  const navLeft = document.createElement('div');
  navLeft.className = 'site-shell__nav-left';
  if (config.cfde_logo) {
    const cfdeImg = document.createElement('img');
    cfdeImg.src = resolveAsset(config.cfde_logo);
    cfdeImg.alt = 'CFDE Logo';
    navLeft.appendChild(cfdeImg);
  }
  if (config.tissue_logo) {
    const tissueImg = document.createElement('img');
    tissueImg.src = resolveAsset(config.tissue_logo);
    tissueImg.alt = config.tissue ? `${config.tissue} Logo` : 'Tissue Logo';
    navLeft.appendChild(tissueImg);
  }
  nav.appendChild(navLeft);

  // Nav title
  const navTitle = document.createElement('a');
  navTitle.className = 'site-shell__nav-title';
  navTitle.href = '#';

  const titleGroup = document.createElement('div');
  titleGroup.className = 'site-shell__title-group';

  const titleCfde = document.createElement('div');
  titleCfde.className = 'site-shell__title-cfde';
  titleCfde.textContent = 'CFDE';

  const titleName = document.createElement('div');
  titleName.className = 'site-shell__title-name';
  titleName.textContent = config.tissue || '';
  titleName.appendChild(document.createElement('br'));
  titleName.append('Resource');

  titleGroup.appendChild(titleCfde);
  titleGroup.appendChild(titleName);
  navTitle.appendChild(titleGroup);
  nav.appendChild(navTitle);

  // Nav menu area
  const navMenu = document.createElement('div');
  navMenu.className = 'site-shell__nav-menu';

  // Hamburger
  const hamburger = document.createElement('div');
  hamburger.className = 'site-shell__nav-hamburger';
  const toggle = document.createElement('input');
  toggle.type = 'checkbox';
  toggle.id = 'site-shell-hamburger-toggle';
  toggle.className = 'site-shell__hamburger-toggle';
  const label = document.createElement('label');
  label.htmlFor = 'site-shell-hamburger-toggle';
  label.className = 'site-shell__hamburger';
  for (let i = 0; i < 3; i++) {
    const slice = document.createElement('span');
    slice.className = 'site-shell__slice';
    label.appendChild(slice);
  }
  hamburger.appendChild(toggle);
  hamburger.appendChild(label);
  navMenu.appendChild(hamburger);

  // Menu wrapper
  const menuWrapper = document.createElement('div');
  menuWrapper.className = 'site-shell__menu-wrapper';

  // Main menu
  const mainMenuOuter = document.createElement('div');
  mainMenuOuter.className = 'site-shell__main-menu';
  mainMenuOuter.appendChild(createMenu(config.menu, currentUrl));
  menuWrapper.appendChild(mainMenuOuter);

  // Top menu (search, login)
  const topMenu = document.createElement('div');
  topMenu.className = 'site-shell__top-menu';

  const searchItem = document.createElement('div');
  searchItem.className = 'site-shell__menu-item';
  searchItem.appendChild(createSearchIcon());
  searchItem.append(' Search');
  topMenu.appendChild(searchItem);

  const loginItem = document.createElement('div');
  loginItem.className = 'site-shell__menu-item';
  loginItem.appendChild(createUserIcon());
  loginItem.append(' Login');
  topMenu.appendChild(loginItem);

  menuWrapper.appendChild(topMenu);
  navMenu.appendChild(menuWrapper);
  nav.appendChild(navMenu);

  // Nav right — wheel
  const navRight = document.createElement('div');
  navRight.className = 'site-shell__nav-right';
  if (config.cfde_wheel) {
    const wheelImg = document.createElement('img');
    wheelImg.src = resolveAsset(config.cfde_wheel);
    wheelImg.alt = 'CFDE Wheel';
    navRight.appendChild(wheelImg);
  }
  nav.appendChild(navRight);

  header.appendChild(nav);
  container.appendChild(header);

  // Set up URL change watching
  setTimeout(() => {
    updateActiveMenu();
    watchUrlChanges();
  }, 0);
}

function watchUrlChanges() {
  window.addEventListener('popstate', updateActiveMenu);
}

function updateActiveMenu() {
  const currentUrl = window.location.href;
  document.querySelectorAll('.site-shell__submenu-item').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('site-shell__submenu-item--active', isActive(href, currentUrl));
  });
  document.querySelectorAll('.site-shell__menu-item-wrapper').forEach(wrapper => {
    const link = wrapper.querySelector('.site-shell__menu-item');
    const href = link?.getAttribute('href');
    const hasActiveSub = wrapper.querySelector('.site-shell__submenu-item--active');
    wrapper.classList.toggle(
      'site-shell__menu-item-wrapper--active',
      isActive(href, currentUrl) || !!hasActiveSub
    );
  });
}
