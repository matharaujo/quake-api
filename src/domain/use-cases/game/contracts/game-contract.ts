type Game = {
  totalKills: number;
  players: string[];
  kills: {
    [key: string]: number;
  };
};

export default Game;
