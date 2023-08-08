import { describe, expect, test } from 'vitest';
import { Guild } from '../api';
import { Hypicle } from '../client';
import { API_KEY } from './_env';

describe('Endpoints', () => {
  describe('/guild', () => {
    test('Get Guild by ID', async () => {
      const client = new Hypicle(API_KEY);

      const g = new Guild(client, '52e57a1c0cf2e250d1cd00f8', 'id');
      const guildData = await g.getGuildData();

      expect(guildData.success).toBe(true);
      expect(guildData.guild?._id).toBe('52e57a1c0cf2e250d1cd00f8');
      expect(guildData.guild?.joinable).toBe(false);
    });

    test('Get Guild by Name', async () => {
      const client = new Hypicle(API_KEY);

      const g = new Guild(client, 'The Sloths', 'name');
      const guildData = await g.getGuildData();

      expect(guildData.success).toBe(true);
      expect(guildData.guild?._id).toBe('52e57a1c0cf2e250d1cd00f8');
      expect(guildData.guild?.joinable).toBe(false);
    });
  });
});
