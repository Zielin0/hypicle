import { Client } from '../../client';
import { Boosters } from './boosters.types';

/**
 * Get current active boosters
 * 
 * @param client
 * The Hypicle Client
 * @returns Global {@link Boosters} data
 */
export const getBoosters = async (client: Client) => {
  return await client.fetch<Boosters>('boosters');
};
