import { describe, expect, test } from '@jest/globals';
import { Hypicle } from '../client';
import { API_KEY } from './_env';
import { getCounts } from '../api';

describe('Endpoints', () => {
  describe('/counts', () => {
    test('Current Player Counts', async () => {
      const client = new Hypicle(API_KEY);

      const counts = await getCounts(client);

      expect(counts.success).toBe(true);
      expect(counts.players).toBeGreaterThan(0);
    });
  });
});
