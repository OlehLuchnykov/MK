const rootEl = document.querySelector('.arenas');
// const randomBtnEl = document.querySelector('.arenas .button');

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

const form = document.querySelector('.control');


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

const logs = {
  start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
  end: [
    'Результат удара [playerWins]: [playerLose] - труп',
    '[playerLose] погиб от удара бойца [playerWins]',
    'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
  ],
  hit: [
    '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
    '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
    '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
    '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
    '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
    '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
    '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
    '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
    '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
    '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
    '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
    '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
    '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
    '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
    '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
    '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
    '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
    '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
  ],
  defence: [
    '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
    '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
    '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
    '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
    '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
    '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
    '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
    '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
  ],
  draw: 'Ничья - это тоже победа!'
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

rootEl.appendChild(createPlayer(player1));
rootEl.appendChild(createPlayer(player2));
generateLog('start', player1, player2);

function changeHP(hpValue) {

  this.hp = this.hp - hpValue;
  if (this.hp <= 0) {
    this.hp = 0;
  }

}

function elHP() {
  return document.querySelector(`.player${this.player}  .life`);
}

function renderHP() {
  this.elHP().style.width = `${this.hp}%`;
}

function showResultText(name) {
  const resultTitle = createElement('div', 'loseTitle');
  if (name) {
    resultTitle.innerText = `${name} win`;
  } else {
    resultTitle.innerText = 'Draw';

  }
  return resultTitle;

}

function randomizer(val) {
  return Math.ceil(Math.random() * val);
}

// randomBtnEl.addEventListener('click', function () {
//   player1.changeHP(randomizer());
//   player2.changeHP(randomizer());
//   player1.renderHP();
//   player2.renderHP();
//
//   if (player1.hp === 0 || player2.hp === 0) {
//     randomBtnEl.disabled = true;
//     createReloadButton();
//   }
//
//   if (player1.hp === 0 && player1.hp < player2.hp) {
//     rootEl.appendChild(showResultText(player2.name));
//   } else if (player2.hp === 0 && player2.hp < player1.hp) {
//     rootEl.appendChild(showResultText(player1.name));
//   } else if (player1.hp === 0 && player2.hp === 0) {
//     rootEl.appendChild(showResultText());
//   }
//
// });

function fight(firstPlayer, secondPlayer) {

  hitResult(firstPlayer.defence, secondPlayer.hit, secondPlayer.value, player1);
  hitResult(secondPlayer.defence, firstPlayer.hit, firstPlayer.value, player2);

  if (player1.hp === 0 || player2.hp === 0) {
    form.disabled = true;
    createReloadButton();
  }

  showFightResult();
}

function createReloadButton() {
  const reloadBtnWrapEl = createElement('div', 'reloadWrap');
  const reloadBtnEl = createElement('button', 'button');

  reloadBtnEl.innerText = 'Restart';
  reloadBtnWrapEl.appendChild(reloadBtnEl);
  rootEl.appendChild(reloadBtnWrapEl);

  reloadBtnEl.addEventListener('click', function () {
    window.location.reload();
  });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const enemy = enemyAttack();
  const hero = heroAttack();

  fight(hero, enemy);
});

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

function generateLog(type, player1, player2, playerHitValue) {
  const chatEl = document.querySelector('.chat');
  const date = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
  let str = '';

  switch(type) {
    case 'start':
      str = `<p style="background-color: green;">${logs[type].replace('[time]', date).replace('[player1]', player1.name).replace('[player2]', player2.name)}</p>`;
      chatEl.insertAdjacentHTML('afterbegin', str);
      return;
    case 'hit':
      str = `<p style="background-color: red;">${date} - ${logs[type][randomizer(17)].replace('[playerDefence]', player2.name).replace('[playerKick]', player1.name)} -${playerHitValue} [${player2.hp}/100]</p>`;
      chatEl.insertAdjacentHTML('afterbegin', str)
      return;
    case 'defence':
      str = `<p style="background-color: blue;">${date} - ${logs[type][randomizer(7)].replace('[playerKick]', player2.name).replace('[playerDefence]', player1.name)}</p>`;
      chatEl.insertAdjacentHTML('afterbegin', str);
      return;
    case 'end':
      str = `<p style="background-color: black;">${logs[type][randomizer(3)].replace('[playerWins]', player1.name).replace('[playerLose]', player2.name)}</p>`;
      chatEl.insertAdjacentHTML('afterbegin', str);
      return;
    case 'draw':
      chatEl.insertAdjacentHTML('afterbegin', logs[type]);
      return;
  }
}
