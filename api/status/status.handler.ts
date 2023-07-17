import { Client } from '../../client';
import { Status } from './status.types';

/**
 * Get the status of a player by UUID
 * 
 * @param client - The Hypicle Client
 * @param uuid - The UUID of a player
 * @returns The player's {@link Status} interface
 */
export const getStatus = async (client: Client, uuid: string) => {
  return await client.fetch<Status>('status', { query: { uuid } });
};
