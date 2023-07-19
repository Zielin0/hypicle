import { describe, expect, test } from 'vitest';
import { getPunishments } from '../api';
import { Hypicle } from '../client';
import { API_KEY } from './_env';

describe('Endpoints', () => {
  describe('/punishmentstats', () => {
    test('Punishment Stats', async () => {
      const client = new Hypicle(API_KEY);

      const punishments = await getPunishments(client);

      expect(punishments.success).toBe(true);
    });
  });
});
