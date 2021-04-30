import { generateLog } from './log.js';
import { ATTACK, HIT, rootEl, form } from './const.js';
import Player from './PlayerClass.js';
import { createElement, randomizer } from '../common/common.js';
import { createReloadButton } from './reloadBtn.js';

class Game {
  constructor(props) {
    this.player1 = new Player(props.player1);
    this.player2 = new Player(props.player2);
  }

  showResultText = (name) => {
    const resultTitle = createElement('div', 'loseTitle');
    if (name) {
      resultTitle.innerText = `${name} win`;
    } else {
      resultTitle.innerText = 'Draw';

    }
    return resultTitle;
  }

  enemyAttack = () => {
    const hit = ATTACK[randomizer(3) - 1];
    const defence = ATTACK[randomizer(3) - 1];
    return {
      value: randomizer(HIT[hit]),
      hit,
      defence
    }
  }

  heroAttack = () => {
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

  showFightResult = () => {
    if (this.player1.hp === 0 && this.player1.hp < this.player2.hp) {
      rootEl.appendChild(this.showResultText(this.player2.name));
      generateLog('end', this.player2, this.player1);
    } else if (this.player2.hp === 0 && this.player2.hp < this.player1.hp) {
      rootEl.appendChild(this.showResultText(this.player1.name));
      generateLog('end', this.player1, this.player2);
    } else if (this.player1.hp === 0 && this.player2.hp === 0) {
      rootEl.appendChild(this.showResultText());
    }
  }

  hitResult = (defence, hit, hitValue, player) => {
    if (hit !== defence) {
      player.changeHP(hitValue);
      player.renderHP();
      player === this.player1 ? generateLog('hit', this.player2, this.player1, hitValue) : generateLog('hit', this.player1, this.player2, hitValue);
    } else {
      player === this.player1 ? generateLog('defence', this.player1, this.player2, hitValue) : generateLog('defence', this.player2, this.player1, hitValue);
    }
  }

  fight = (firstPlayer, secondPlayer) => {

    this.hitResult(firstPlayer.defence, secondPlayer.hit, secondPlayer.value, this.player1);
    this.hitResult(secondPlayer.defence, firstPlayer.hit, firstPlayer.value, this.player2);

    if (this.player1.hp === 0 || this.player2.hp === 0) {
      form.querySelector('button').disabled = true;
      createReloadButton();
    }

    this.showFightResult();
  }

  start = () => {
    rootEl.appendChild(this.player1.createPlayer(this.player1));
    rootEl.appendChild(this.player2.createPlayer(this.player2));
    generateLog('start', this.player1, this.player2);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const enemy = this.enemyAttack();
      const hero = this.heroAttack();

      this.fight(hero, enemy);
    });
  }
}

export default Game;
