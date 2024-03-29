import { describe, expect, test } from 'vitest';
import { getRecentgames } from '../api';
import { Hypicle } from '../client';
import { API_KEY } from './_env';

describe('Endpoints', () => {
  describe('/recentgames', () => {
    test('Player\'s Recent Games', async () => {
      const client = new Hypicle(API_KEY);

      const recentgames = await getRecentgames(client, '7b7e33d55da743d89e9a3ee1660542d5');

      expect(recentgames.success).toBe(true);
      expect(recentgames.uuid).toBe('7b7e33d55da743d89e9a3ee1660542d5');
    });
  });
});
