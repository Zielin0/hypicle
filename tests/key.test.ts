import { describe, expect, test } from 'vitest';
import { getKey } from '../api';
import { Hypicle } from '../client';
import { API_KEY } from './_env';

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
