import Parser from './game-parser';

import Game from '../../../domain/use-cases/game/contracts/game-contract';

class Service {
  public static async findGames(): Promise<Game[]> {
    const result: Game[] = new Parser().initialize();

    return result;
  }
}

export default Service;
