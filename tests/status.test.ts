import { describe, expect, test } from 'vitest';
import { getStatus } from '../api';
import { Hypicle } from '../client';
import { API_KEY } from './_env';

describe('Endpoints', () => {
  describe('/status', () => {
    test('Player Status', async () => {
      const client = new Hypicle(API_KEY);

      const status = await getStatus(client, '7b7e33d55da743d89e9a3ee1660542d5');

      expect(status.success).toBe(true);
      expect(status.uuid).toBe('7b7e33d55da743d89e9a3ee1660542d5');
      expect(status.session.online).toBeDefined();
    });
  });
});
