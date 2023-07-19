import { describe, expect, test } from 'vitest';
import { getBoosters } from '../api';
import { Hypicle } from '../client';
import { API_KEY } from './_env';

describe('Endpoints', () => {
  describe('/boosters', () => {
    test('Boosters Stats', async () => {
      const client = new Hypicle(API_KEY);

      const boosters = await getBoosters(client);

      expect(boosters.success).toBe(true);
    });
  });
});
