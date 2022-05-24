type GameParser = {
  round: number;
  totalKills: number;
  players: string[];
  kills: {
    [key: string]: number;
  };
};

export default GameParser;
