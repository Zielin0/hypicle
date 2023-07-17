import { Client } from '../../client';
import { GuildResponse } from './guild.types';

/**
 * Get Guild info by player UUID
 * 
 * @param client - The Hypicle Client
 * @param uuid - The UUID of a player
 * @returns The guild's {@link GuildResponse} interface
 */
export const getGuildByPlayer = async (client: Client, uuid: string) => {
  return await client.fetch<GuildResponse>('guild', { query: { player: uuid } });
};

/**
 * Get Guild info by Guild ID
 * 
 * @param client - The Hypicle Client
 * @param id - The ID of a Guild
 * @returns The guild's {@link GuildResponse} interface
 */
export const getGuildByID = async (client: Client, id: string) => {
  return await client.fetch<GuildResponse>('guild', { query: { id } });
};

/**
 * Get Guild info by Guild Name
 * 
 * @param client - The Hypicle Client
 * @param id - The Name of a Guild
 * @returns The guild's {@link GuildResponse} interface
 */
export const getGuildByName = async (client: Client, name: string) => {
  return await client.fetch<GuildResponse>('guild', { query: { name } });
};
