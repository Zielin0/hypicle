import { Client } from '../../client';
import { Recentgames } from './recentgames.types';

/**
 * Get recently played games of a player by UUID
 * 
 * @param client - The Hypicle Client
 * @param uuid - The UUID of a player
 * @returns A player's {@link Recentgames} interface
 */
export const getRecentgames = async (client: Client, uuid: string) => {
  return await client.fetch<Recentgames>('recentgames', { query: { 'uuid': uuid } });
};
