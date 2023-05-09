import { Client } from '../../client';
import { Recentgames } from './recentgames.types';

export const getRecentgames = async (client: Client, uuid: string) => {
  return await client.fetch<Recentgames>('recentgames', { query: { 'uuid': uuid } });
};
