import { generateLog } from './log.js';
import { rootEl, form, http } from './const.js';
import Player from './PlayerClass.js';
import { createElement } from '../common/common.js';
import { createReloadButton } from './reloadBtn.js';

class Game {
  constructor() {
    this.player1 = {};
    this.player2 = {};
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

    this.hitResult(firstPlayer.defence, secondPlayer.hit, secondPlayer.value || 0, this.player1);
    this.hitResult(secondPlayer.defence, firstPlayer.hit, firstPlayer.value || 0, this.player2);

    if (this.player1.hp === 0 || this.player2.hp === 0) {
      form.querySelector('button').disabled = true;
      createReloadButton();
    }

    this.showFightResult();
  }

  start = async () => {
    const player1 = await http.getRandomPlayer();
    const player2 = await http.getRandomPlayer();
    this.player1 = new Player({
      ...player1,
      player: 1,
    });
    this.player2 = new Player({
      ...player2,
      player: 2,
    });
    rootEl.appendChild(this.player1.renderPlayer(this.player1));
    rootEl.appendChild(this.player2.renderPlayer(this.player2));
    generateLog('start', this.player1, this.player2);

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const { player1, player2 } = await this.player1.attack();
      this.fight(player1, player2);
    });
  }
}

export default Game;
