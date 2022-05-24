import Http from '../../../infrastructure/helpers/http';
import HttpProtocol from '../../../infrastructure/protocols/http-protocol';

import Game from '../../../domain/use-cases/game/contracts/game-contract';

import Service from './game-service';

class Controller {
  public static async findGames(): Promise<HttpProtocol> {
    try {
      const result: Game[] = await Service.findGames();

      return Http.ok({
        result,
      });
    } catch (error: any) {
      return Http.serverError(error);
    }
  }
}

export default Controller;
