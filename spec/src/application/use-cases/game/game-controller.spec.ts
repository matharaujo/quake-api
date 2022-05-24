import HttpProtocol from '../../../../../src/infrastructure/protocols/http-protocol';

import Controller from '../../../../../src/application/use-cases/game/game-controller';
import Service from '../../../../../src/application/use-cases/game/game-service';

import GameMock from '../../../../__mocks__/game-mock';

describe('[Application / Use Cases] - Game Controller', (): void => {
  test('[findGames] - Should return games', async (): Promise<void> => {
    jest.spyOn(Service, 'findGames').mockImplementation((): any => GameMock);

    const response: HttpProtocol = await Controller.findGames();

    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(GameMock);
  });

  test('[findGames] - Should return error if catch', async (): Promise<void> => {
    jest.spyOn(Service, 'findGames').mockImplementation((): any => {
      throw new Error('error');
    });

    const response: HttpProtocol = await Controller.findGames();

    expect(response.statusCode).toBe(500);
    expect(response.body).toStrictEqual({
      error: 'Oops! An error has occurred!',
      message: 'error',
    });
  });
});
