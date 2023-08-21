import { Client } from '../../client';
import { Key } from './key.types';

/**
 * This endpoint is no longer available
 * It'll return 404 error.
 * 
 * @param client
 * The Hypicle Client
 * @returns 404 Error
 * @deprecated
 */
export const getKey = async (client: Client) => {
  return await client.fetch<Key>('key');
};
