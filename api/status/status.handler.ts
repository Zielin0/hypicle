import { Client } from '../../client';
import { Status } from './status.types';

export const getStatus = async (client: Client, uuid: string) => {
  return await client.fetch<Status>('status', { query: { uuid } });
};
