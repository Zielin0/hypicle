import { afterEach, describe, expect, test, jest } from '@jest/globals';
import { Hypicle, HypicleError } from '../client';
import { API_KEY } from './_env';
import { Player } from '../api';

describe('Error Handling', () => {
  let client: Hypicle;
  const uuid = '7b7e33d55da743d89e9a3ee1660542d5';

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('Invalid API Key', async () => {
    client = new Hypicle('invalid-key');

    const mock = {
      success: false,
      cause: 'Invalid API key',
      code: 403,
    }

    const player = new Player(client, uuid);

    try {
      await player.getPlayerData();
    } catch (err) {
      const hypicle_err = err as HypicleError;

      expect(hypicle_err.success).toBe(mock.success);
      expect(hypicle_err.message).toBe(mock.cause);
      expect(hypicle_err.status).toBe(mock.code);
    }
  });

  test('Malformed UUID', async () => {
    client = new Hypicle(API_KEY);

    const mock = {
      success: false,
      cause: 'Malformed UUID',
      code: 422,
    }

    const player = new Player(client, 'invalid-uuid');

    try {
      await player.getPlayerData();
    } catch (err) {
      const hypicle_err = err as HypicleError;

      expect(hypicle_err.success).toBe(mock.success);
      expect(hypicle_err.message).toBe(mock.cause);
      expect(hypicle_err.status).toBe(mock.code);
    }
  });

  test('Missing Field', async () => {
    const client = new Hypicle(API_KEY);
    const player = new Player(client, uuid);

    const mock = new HypicleError('Missing one or more fields [uuid]', 400, false);

    jest.spyOn(player, 'getPlayerData').mockImplementation(() => {
      throw mock;
    });

    try {
      await player.getPlayerData();
      expect(player.getPlayerData).toHaveBeenCalled();
    } catch (err) {
      const hypicle_err = err as HypicleError;

      expect(hypicle_err.success).toBe(mock.success);
      expect(hypicle_err.message).toBe(mock.message);
      expect(hypicle_err.status).toBe(mock.status);
    }
  });

  test('Key throttle', async () => {
    const client = new Hypicle(API_KEY);
    const player = new Player(client, uuid);

    const mock = new HypicleError('Key throttle', 429, false, true, true);

    jest.spyOn(player, 'getPlayerData').mockImplementation(() => {
      throw mock;
    });

    try {
      await player.getPlayerData();
      expect(player.getPlayerData).toHaveBeenCalled();
    } catch (err) {
      const hypicle_err = err as HypicleError;

      expect(hypicle_err.success).toBe(mock.success);
      expect(hypicle_err.message).toBe(mock.message);
      expect(hypicle_err.status).toBe(mock.status);

      expect(hypicle_err.throttle).toBe(mock.throttle);
      expect(hypicle_err.global).toBe(mock.global);
    }
  });
});
