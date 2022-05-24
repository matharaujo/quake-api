import Game from '../../src/domain/use-cases/game/contracts/game-contract';

const GameMock: Game = {
  totalKills: 1,
  players: ['Player'],
  kills: {
    Player: 1,
  },
};

export default GameMock;
