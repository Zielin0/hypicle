import { describe, expect, test } from 'vitest';
import { Player } from '../api';
import { Hypicle } from '../client';
import { API_KEY } from './_env';

describe('Endpoints', () => {
  describe('/player', () => {
    test('Player Data', async () => {
      const client = new Hypicle(API_KEY);
      const player = new Player(client, '7b7e33d55da743d89e9a3ee1660542d5');

      const data = await player.getPlayerData();

      expect(data.success).toBe(true);
      expect(data.player.uuid).toBe('7b7e33d55da743d89e9a3ee1660542d5');
    });
  });
});
