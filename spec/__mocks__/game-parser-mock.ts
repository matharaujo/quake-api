import GameParser from '../../src/domain/use-cases/game/contracts/game-parser-contract';

const GameParserMock: GameParser[] = [
  {
    round: 1,
    totalKills: 1,
    players: ['Player'],
    kills: {
      Player: 1,
    },
  },
  {
    round: 2,
    totalKills: 1,
    players: ['Player'],
    kills: {
      Player: 1,
    },
  },
];

export default GameParserMock;
