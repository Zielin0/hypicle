import { describe, expect, test } from '@jest/globals';
import { Hypicle } from '../client';
import { API_KEY } from './_env';
import { getBoosters } from '../api';

describe('Endpoints', () => {
  describe('/boosters', () => {
    test("Boosters Stats", async () => {
      const client = new Hypicle(API_KEY);

      const boosters = await getBoosters(client);

      expect(boosters.success).toBe(true);
    });
  });
});
