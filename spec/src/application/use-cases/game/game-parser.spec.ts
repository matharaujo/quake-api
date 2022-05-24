import Parser from '../../../../../src/application/use-cases/game/game-parser';

import GameParser from '../../../../../src/domain/use-cases/game/contracts/game-parser-contract';

import FileRoundMock from '../../../../__mocks__/file-round-mock';
import FileKillMock from '../../../../__mocks__/file-kill-mock';

describe('[Application / Use Cases] - Parser', (): void => {
  test('[initialize] - Should initialize', async (): Promise<void> => {
    const initialize: GameParser[] = new Parser().initialize();

    expect(initialize).toBeTruthy();
  });

  test('[separateByRound] - Should separate by round', async (): Promise<void> => {
    const byRound: GameParser[] = new Parser().separateByRound();

    expect(byRound.length).toBeGreaterThan(1);
    expect(byRound[0]).toHaveProperty('round');
    expect(byRound[0]).toHaveProperty('totalKills');
    expect(byRound[0]).toHaveProperty('players');
    expect(byRound[0]).toHaveProperty('kills');
  });

  test('[findPlayers] - Should found players', async (): Promise<void> => {
    const players = Parser.findPlayers(FileRoundMock);

    expect(players).toHaveLength(3);
    expect(players[0]).toBe('Isgalamido');
    expect(players[1]).toBe('Dono da Bola');
    expect(players[2]).toBe('Mocinha');
  });

  test('[findKill] - Should count player kills', () => {
    const kills = Parser.findKill(FileRoundMock);

    expect(kills).toHaveLength(11);
  });

  test('[countDie] - Should count player deaths', async (): Promise<void> => {
    const count = Parser.countDie('Zeh', FileKillMock);

    expect(count).toEqual(2);
  });

  test('[killsBy] - Should count kills per player', async (): Promise<void> => {
    const kills = Parser.killsBy('Isgalamido', FileKillMock);

    expect(kills).toEqual(1);
  });

  test('[makeKills] - Should make kills', async (): Promise<void> => {
    const players = ['Dono da Bola', 'Mocinha', 'Isgalamido', 'Zeh'];

    const kills = Parser.makeKills(players, FileKillMock);

    expect(kills).toHaveProperty('totalKills', 4);
    expect(kills.kills).toEqual({
      'Dono da Bola': -1,
      Mocinha: 0,
      Isgalamido: 1,
      Zeh: -2,
    });
  });
});
