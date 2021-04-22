import { createElement, randomizer } from "../common/common.js";
import { player1, player2, rootEl } from "./player.js";
import { generateLog } from "./log.js";
import { createReloadButton } from "./reloadBtn.js";

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

const form = document.querySelector('.control');

function showResultText(name) {
  const resultTitle = createElement('div', 'loseTitle');
  if (name) {
    resultTitle.innerText = `${name} win`;
  } else {
    resultTitle.innerText = 'Draw';

  }
  return resultTitle;
}

function fight(firstPlayer, secondPlayer) {

  hitResult(firstPlayer.defence, secondPlayer.hit, secondPlayer.value, player1);
  hitResult(secondPlayer.defence, firstPlayer.hit, firstPlayer.value, player2);

  if (player1.hp === 0 || player2.hp === 0) {
    form.disabled = true;
    createReloadButton();
  }

  showFightResult();
}



function enemyAttack() {
  const hit = ATTACK[randomizer(3) - 1];
  const defence = ATTACK[randomizer(3) - 1];
  return {
    value: randomizer(HIT[hit]),
    hit,
    defence
  }
}

function heroAttack() {
  const attack = {};

  for (let item of form) {
    if (item.checked && item.name === 'hit') {
      attack.value = randomizer(HIT[item.value]);
      attack.hit = item.value;
    }

    if (item.checked && item.name === 'defence') {
      attack.value = randomizer(HIT[item.value]);
      attack.defence = item.value;
    }

    item.checked = false;
  }
  return attack;
}

function showFightResult() {
  if (player1.hp === 0 && player1.hp < player2.hp) {
    rootEl.appendChild(showResultText(player2.name));
    generateLog('end', player2, player1);
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    rootEl.appendChild(showResultText(player1.name));
    generateLog('end', player1, player2);
  } else if (player1.hp === 0 && player2.hp === 0) {
    rootEl.appendChild(showResultText());
  }
}

function hitResult(defence, hit, hitValue, player) {
  if (hit !== defence) {
    player.changeHP(hitValue);
    player.renderHP();
    player === player1 ? generateLog('hit', player2, player1, hitValue) : generateLog('hit', player1, player2, hitValue);
  } else {
    player === player1 ? generateLog('defence', player1, player2, hitValue) : generateLog('defence', player2, player1, hitValue);
  }
}

export { enemyAttack, heroAttack, fight, form }
