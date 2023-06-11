import { describe, expect, test } from '@jest/globals';
import { Hypicle } from '../client';
import { API_KEY } from './_env';
import { getLeaderboards } from '../api';

describe('Endpoints', () => {
  describe('/leaderboards', () => {
    test('Leaderboards', async () => {
      const client = new Hypicle(API_KEY);

      const leaderboards = await getLeaderboards(client);

      expect(leaderboards.success).toBe(true);
      expect(leaderboards.leaderboards.duels).toBeDefined();
    });
  });
});