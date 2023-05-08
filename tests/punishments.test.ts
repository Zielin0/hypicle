import { describe, expect, test } from '@jest/globals';
import { Hypicle } from '../client';
import { API_KEY } from './_env';
import { getPunishments } from '../api/punishments/punishments.service';

describe('Endpoints', () => {
  describe('/punishmentstats', () => {
    test("Punishment Stats", async () => {
      const client = new Hypicle(API_KEY);

      const punishments = await getPunishments(client);

      expect(punishments.success).toBe(true);
    });
  });
});
