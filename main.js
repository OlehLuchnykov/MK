const rootEl = document.querySelector('.arenas');
const randomBtnEl = document.querySelector('.arenas .button');

const player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['gun', 'knife', 'bomb', 'sword'],
  attack: function () {
    console.log(this.name + 'Fight...')
  }
};

const player2 = {
    player: 2,
    name: 'Sub Zero',
    hp: 100,
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

function createPlayer(playerObj) {
    const newPlayerBox = createElement('div', 'player' + playerObj.player);

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

function changeHP(playerObj) {
    const playerLife = document.querySelector('.player' + playerObj.player + ' .life');

    playerObj.hp = playerObj.hp - randomizer();

    if(playerObj.hp <= 0) {
        playerObj.hp = 0;
    }
    playerLife.style.width = playerObj.hp + '%';
}

function showResultText(name) {
    const resultTitle = createElement('div', 'loseTitle');
    if(name) {
        resultTitle.innerText = name + ' win';
    }else {
        resultTitle.innerText = 'Draw';
    }

    return resultTitle;
}

function randomizer() {
    return Math.ceil(Math.random() * 20);
}

randomBtnEl.addEventListener('click', function () {
    changeHP(player1);
    changeHP(player2);

    if(player1.hp === 0 || player2.hp === 0) {
        randomBtnEl.disabled = true;
    }

    if(player1.hp === 0 && player1.hp < player2.hp) {
        rootEl.appendChild(showResultText(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        rootEl.appendChild(showResultText(player1.name));
    } else if (player1.hp === 0 && player2.hp === 0) {
        rootEl.appendChild(showResultText());

    }

});

rootEl.appendChild(createPlayer(player1));
rootEl.appendChild(createPlayer(player2));

