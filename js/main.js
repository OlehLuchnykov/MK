import Game from "./game/GameClass.js";

const game = new Game({
    player1: {
      player: 1,
      name: 'Scorpion',
      hp: 100,
      img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
      weapon: ['gun', 'knife', 'bomb', 'sword']
    },
    player2: {
      player: 2,
      name: 'Sub Zero',
      hp: 100,
      img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
      weapon: ['gun', 'knife', 'bomb', 'sword'],
    }
  }
);

game.start();
