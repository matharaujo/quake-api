import Service from '../../../../../src/application/use-cases/game/game-service';
import Parser from '../../../../../src/application/use-cases/game/game-parser';

import Game from '../../../../../src/domain/use-cases/game/contracts/game-contract';

import GameParserMock from '../../../../__mocks__/game-parser-mock';

describe('[Application / Use Cases] - Game Service', (): void => {
  test('[findGames] - Should return games', async (): Promise<void> => {
    jest
      .spyOn(Parser.prototype, 'initialize')
      .mockImplementation((): any => GameParserMock);

    const response: Game[] = await Service.findGames();

    expect(response).toBe(GameParserMock);
  });
});
