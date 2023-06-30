import { describe, expect, test } from '@jest/globals';
import { Hypicle } from '../client';
import { API_KEY } from './_env';
import { getGuildByID, getGuildByName } from '../api';

describe('Endpoints', () => {
  describe('/guild', () => {
    test('Get Guild by ID', async () => {
      const client = new Hypicle(API_KEY);

      const g = await getGuildByID(client, '52e57a1c0cf2e250d1cd00f8');

      expect(g.success).toBe(true);
      expect(g.guild?._id).toBe('52e57a1c0cf2e250d1cd00f8');
      expect(g.guild?.joinable).toBe(false);
    });

    test('Get Guild by Name', async () => {
      const client = new Hypicle(API_KEY);

      const g = await getGuildByName(client, 'The Sloths');

      expect(g.success).toBe(true);
      expect(g.guild?._id).toBe('52e57a1c0cf2e250d1cd00f8');
      expect(g.guild?.joinable).toBe(false);
    });
  });
});
