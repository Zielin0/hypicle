import { Client } from '../../client';
import { Leaderboards } from './leaderboards.types';
import { FieldMap } from '../../utils';

const mapping : FieldMap<Leaderboards> = {};

export const getLeaderboards = async (client: Client) => {
  return await client.fetchMapping<Leaderboards>('leaderboards', mapping);
};
