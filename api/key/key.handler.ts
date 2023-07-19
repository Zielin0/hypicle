import { Client } from '../../client';
import { Key } from './key.types';

/**
 * Get informations about the API Key
 * 
 * @param client
 * The Hypicle Client
 * @returns API {@link Key} info interface
 * @deprecated
 */
export const getKey = async (client: Client) => {
  return await client.fetch<Key>('key');
};
