import { Client } from '../../client';
import { Punishments } from './punishments.types';

/**
 * Get global punishment statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global {@link Punishments} data
 */
export const getPunishments = async (client: Client) => {
  return await client.fetch<Punishments>('punishmentstats');
};
