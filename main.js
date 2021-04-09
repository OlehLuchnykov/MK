const rootEl = document.querySelector('.arenas');

const player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 10,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['gun', 'knife', 'bomb', 'sword'],
  attack: function () {
    console.log(this.name + 'Fight...')
  }
};

const player2 = {
    player: 2,
    name: 'Sub Zero',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['gun', 'knife', 'bomb', 'sword'],
    attack: function () {
        console.log(this.name + 'Fight...')
    }
};

function createElement(tagName, className) {
    const newEl = document.createElement(tagName);

    if (className) {
        newEl.classList.add(className);
    }

    return newEl
}

function createPlayer(playerClass, playerObj) {
    const newPlayerBox = createElement('div', 'player' + playerObj.player);
    newPlayerBox.classList.add(playerClass);

    const progressBarEl = createElement('div', 'progressbar');

    const lifeEl = createElement('div', 'life');
    lifeEl.style.width =  playerObj.hp + '%';

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

rootEl.appendChild(createPlayer('player1', player1));
rootEl.appendChild(createPlayer('player1', player2));

