import { Punishments } from './punishments.types';
import { Client } from '../../client';

export const getPunishments = async (client: Client) => {
  return await client.fetch<Punishments>('punishmentstats');
};
