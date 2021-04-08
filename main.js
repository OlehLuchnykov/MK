const player1 = {
  name: 'Scorpion',
  hp: 10,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['gun', 'knife', 'bomb', 'sword'],
  attack: function () {
    console.log(this.name + 'Fight...')
  }
};

const player2 = {
    name: 'Sub Zero',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['gun', 'knife', 'bomb', 'sword'],
    attack: function () {
        console.log(this.name + 'Fight...')
    }
};

function createPlayer(playerClass, playerObj) {
    const newPlayerBox = document.createElement('div');
    newPlayerBox.classList.add(playerClass);

    const progressBarEl = document.createElement('div');
    progressBarEl.classList.add('progressbar');

    const lifeEl = document.createElement('div');
    lifeEl.classList.add('life');
    lifeEl.style.width =  playerObj.hp + '%';

    const nameEl = document.createElement('div');
    nameEl.classList.add('name');
    nameEl.innerText = playerObj.name;

    progressBarEl.appendChild(lifeEl);
    progressBarEl.appendChild(nameEl);

    const characterEl = document.createElement('div');
    characterEl.classList.add('character');

    const imgEl = document.createElement('img');
    imgEl.src = playerObj.img;

    characterEl.appendChild(imgEl);

    newPlayerBox.appendChild(progressBarEl);
    newPlayerBox.appendChild(characterEl);

    const rootEl = document.querySelector('.arenas');

    rootEl.appendChild(newPlayerBox);
}

createPlayer('player1', player1);
createPlayer('player2', player2);
