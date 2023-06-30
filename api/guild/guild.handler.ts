import { Client } from '../../client';
import { GuildResponse } from './guild.types';

export const getGuildByID = async (client: Client, id: string) => {
  return await client.fetch<GuildResponse>('guild', { query: { id } });
};

export const getGuildByName = async (client: Client, name: string) => {
  return await client.fetch<GuildResponse>('guild', { query: { name } });
};
