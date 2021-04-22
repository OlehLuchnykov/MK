import {createElement} from "../common/common.js";
import PlayerClass from "./PlayerClass.js";

const player1 = new PlayerClass({
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['gun', 'knife', 'bomb', 'sword']
});

const player2 = new PlayerClass(
  {
    player: 2,
    name: 'Sub Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['gun', 'knife', 'bomb', 'sword'],
  }
);

const rootEl = document.querySelector('.arenas');

function createPlayer({ player, hp, name, img }) {
  const newPlayerBox = createElement('div', 'player' + player);

  const progressBarEl = createElement('div', 'progressbar');

  const lifeEl = createElement('div', 'life');
  lifeEl.style.width = `${hp}%`;

  const nameEl = createElement('div', 'name');
  nameEl.innerText = name;

  progressBarEl.appendChild(lifeEl);
  progressBarEl.appendChild(nameEl);

  const characterEl = createElement('div', 'character');

  const imgEl = createElement('img');
  imgEl.src = img;

  characterEl.appendChild(imgEl);

  newPlayerBox.appendChild(progressBarEl);
  newPlayerBox.appendChild(characterEl);

  return newPlayerBox;
}

export { player1, player2, rootEl, createPlayer }
