import { generateLog } from './game/log.js';
import { player1, player2, rootEl, createPlayer } from "./game/player.js";
import { enemyAttack, heroAttack, fight, form } from "./game/fight.js";

rootEl.appendChild(createPlayer(player1));
rootEl.appendChild(createPlayer(player2));
generateLog('start', player1, player2);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const enemy = enemyAttack();
  const hero = heroAttack();

  fight(hero, enemy);
});
