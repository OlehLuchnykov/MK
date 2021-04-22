import {createElement} from "../common/common.js";

const player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['gun', 'knife', 'bomb', 'sword'],
  attack: function () {
    console.log(this.name + 'Fight...')
  },
  changeHP,
  elHP,
  renderHP,
};

const player2 = {
  player: 2,
  name: 'Sub Zero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['gun', 'knife', 'bomb', 'sword'],
  attack: function () {
    console.log(this.name + 'Fight...')
  },
  changeHP,
  elHP,
  renderHP,
};

const rootEl = document.querySelector('.arenas');

function createPlayer(playerObj) {
  const newPlayerBox = createElement('div', 'player' + playerObj.player);

  const progressBarEl = createElement('div', 'progressbar');

  const lifeEl = createElement('div', 'life');
  lifeEl.style.width = `${playerObj.hp}%`;

  const nameEl = createElement('div', 'name');
  nameEl.innerText = playerObj.name;

  progressBarEl.appendChild(lifeEl);
  progressBarEl.appendChild(nameEl);

  const characterEl = createElement('div', 'character');

  const imgEl = createElement('img');
  imgEl.src = playerObj.img;

  characterEl.appendChild(imgEl);

  newPlayerBox.appendChild(progressBarEl);
  newPlayerBox.appendChild(characterEl);

  return newPlayerBox;
}

function elHP() {
  return document.querySelector(`.player${this.player}  .life`);
}

function renderHP() {
  this.elHP().style.width = `${this.hp}%`;
}

function changeHP(hpValue) {
  this.hp = this.hp - hpValue;
  if (this.hp <= 0) {
    this.hp = 0;
  }
}

export { player1, player2, rootEl, createPlayer }
