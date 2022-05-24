import fs from 'fs';

import GameParser from '../../../domain/use-cases/game/contracts/game-parser-contract';
import Kill from '../../../domain/use-cases/game/contracts/kill-contract';

class Parser {
  private file: any;

  constructor() {
    this.file = fs.readFileSync(
      `${__dirname}/../../../../files/games.log`,
      'utf-8'
    );
  }

  public initialize(): GameParser[] {
    return this.separateByRound().reduce(
      (game: any, { round, ...data }: { round: number }): any => {
        game[`game_${round}`] = data;

        return game;
      },
      {}
    );
  }

  private separateByRound(): GameParser[] {
    const lines = this.file
      .split('------------------------------------------------------------\n')
      .filter((line: string[]) => line.length > 7);

    return lines.map((line: string, round: number) => {
      let data = line
        .trim()
        .split('\n')
        .map((text) => text.trim());

      const players = Parser.findPlayers(data);

      data = Parser.findKill(data);

      const { totalKills, kills }: Kill = Parser.makeKills(players, data);

      return {
        round: round + 1,
        totalKills,
        players,
        kills,
      };
    });
  }

  private static findPlayers(data: string[]): string[] {
    const hasPlayer = (line: string) => /n\\.+\\t\\/.test(line);
    const playersData = data.filter(hasPlayer);
    let players: string[] = [];

    playersData.forEach((line: string) => {
      const player = line.split('n\\')[1].trim().split('\\t')[0].trim();
      if (!players.includes(player)) players = [...players, player];
    });

    return players;
  }

  private static findKill(data: string[]): string[] {
    const hasKill = (line: string) => line.includes('Kill:');

    return data.filter(hasKill);
  }

  private static countDie(player: string, data: string[]): number {
    const hasWorld = (line: string) =>
      line.includes('<world>') && line.includes(player);

    return data.filter(hasWorld).length;
  }

  private static killsBy(player: string, data: string[]): number {
    const hasWorld = (line: string) =>
      !line.includes('<world>') && line.includes(player);

    const kills = data.filter((line: string) => {
      if (hasWorld(line)) return line.split('killed')[0].includes(player);

      return false;
    });

    return kills.length;
  }

  private static makeKills(players: string[], data: string[]): Kill {
    const object = this.findKill(data);
    const totalKills = object.length;
    const kills: { [key: string]: number } = {};

    players.forEach((player: string) => {
      kills[player] =
        this.killsBy(player, object) - this.countDie(player, object);
    });

    return {
      totalKills,
      kills,
    };
  }
}

export default Parser;
