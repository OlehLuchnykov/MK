import { createElement } from '../common/common.js';
import { rootEl } from './const.js';

const createReloadButton = () => {
  const reloadBtnWrapEl = createElement('div', 'reloadWrap');
  const reloadBtnEl = createElement('button', 'button');

  reloadBtnEl.innerText = 'Restart';
  reloadBtnWrapEl.appendChild(reloadBtnEl);
  rootEl.appendChild(reloadBtnWrapEl);

  reloadBtnEl.addEventListener('click', function () {
    window.location.reload();
  });
}

export { createReloadButton }
