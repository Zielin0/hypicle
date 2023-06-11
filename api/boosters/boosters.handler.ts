import { Client } from '../../client';
import { Boosters } from './boosters.types';

export const getBoosters = async (client: Client) => {
  return await client.fetch<Boosters>('boosters');
};
