import { describe, expect, test } from 'vitest';
import { getCounts } from '../api';
import { Hypicle } from '../client';
import { API_KEY } from './_env';

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
