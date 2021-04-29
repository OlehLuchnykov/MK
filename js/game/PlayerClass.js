import { createElement } from '../common/common.js';

class Player {
  constructor(props) {
    this.player = props.player;
    this.name = props.name;
    this.hp = props.hp;
    this.img = props.img;
    this.weapon = props.weapon;
  }

  attack = () => {
    console.log(`${this.name} Fight...`);
  }

  changeHP = (hpValue) => {
    this.hp = this.hp - hpValue;
    if (this.hp <= 0) {
      this.hp = 0;
    }
  }

  elHP = () => {
    return document.querySelector(`.player${this.player} .life`)
  }

  renderHP = () => {
    this.elHP().style.width = `${this.hp}%`;
  }

  createPlayer = ({player, hp, name, img}) => {
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
}

export default Player;
