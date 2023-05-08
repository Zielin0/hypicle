import { describe, expect, test } from '@jest/globals';
import { Hypicle } from '../client';
import { API_KEY } from './_env';
import { getKey } from '../api';

describe('Endpoints', () => {
  describe('/key', () => {
    test('API Key Information', async () => {
      const client = new Hypicle(API_KEY);

      const key = await getKey(client);

      expect(key.success).toBe(true);
      expect(key.record.totalQueries).toBeGreaterThan(0);
    });
  });
});
