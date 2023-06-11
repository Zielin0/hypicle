import { Client } from '../../client';
import { Key } from './key.types';

export const getKey = async (client: Client) => {
  return await client.fetch<Key>('key');
};
