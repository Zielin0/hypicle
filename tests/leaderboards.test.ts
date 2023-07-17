import { describe, expect, test } from '@jest/globals';
import { getLeaderboards } from '../api';
import { Hypicle } from '../client';
import { API_KEY } from './_env';

describe('Endpoints', () => {
  describe('/leaderboards', () => {
    test('Leaderboards', async () => {
      const client = new Hypicle(API_KEY);

      const leaderboards = await getLeaderboards(client);

      expect(leaderboards.success).toBe(true);
      expect(leaderboards.leaderboards).toBeDefined();
    });
  });
});