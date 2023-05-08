import { Client } from '../../client';
import { FieldMap } from '../../utils';
import { Key } from './key.types';

const mapping: FieldMap<Key> = {};

export const getKey = async (client: Client) => {
  return await client.fetch<Key>('key', mapping);
};
