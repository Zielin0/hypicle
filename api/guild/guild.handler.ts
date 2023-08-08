import { Client } from '../../client';
import { GuildAchievements, GuildExpByType, GuildMember, GuildResponse, GuildType, IGuild } from './guild.types';

/**
 * Guild Leveling system
 * @see https://github.com/Plancke/hypixel-php/blob/master/src/responses/guild/GuildLevelUtil.php
 * @class
 */
export class GuildLeveling {
  private static readonly exp_needed: number[] = [
    100000, 150000, 250000, 500000, 750000, 1000000, 1250000, 1500000, 2000000,
    2500000, 2500000, 2500000, 2500000, 2500000, 3000000,
  ]; 

  /**
   * Get guild level by provided experience
   * @param exp 
   * The guild experience
   * @returns The guild level
   */
  public static getLevel(exp: number): number {
    let level = 0;

    for (let i = 0; ; i++) {
      const need =
        i >= this.exp_needed.length
          ? this.exp_needed[this.exp_needed.length - 1]
          : this.exp_needed[i];

      exp -= need;
      if (exp < 0) {
        return level;
      } else {
        level++;
      }
    }
  }
}

/**
 * The Guild class
 * This class provides various getters for guild data
 * @class
 */
export class Guild {
  readonly #client: Client;

  readonly #id: string;

  readonly #type: GuildType;

  #guildData: GuildResponse | null = null;

  /**
   * Constructs the Guild class by Guild Name / Guild ID / Player UUID
   * 
   * @param client 
   * The Hypicle Client
   * @param id 
   * Guild Name / Guild ID / Player UUID as a string
   * @param type 
   * 'id' | 'name' | 'player'
   */
  constructor(client: Client, id: string, type: GuildType) {
    this.#client = client;
    this.#id = id;
    this.#type = type;
  }

  /**
   * Fetch the guild data
   * 
   * @returns The fetched guild data
   * @private
   */
  async #fetchGuildData(): Promise<GuildResponse> {
    switch (this.#type) {
      case 'id':
        return await this.#client.fetch<GuildResponse>('guild', { query: { id: this.#id } });
      case 'name':
        return await this.#client.fetch<GuildResponse>('guild', { query: { name: this.#id } });
      case 'player':
        return await this.#client.fetch<GuildResponse>('guild', { query: { player: this.#id } });
      default:
        throw new TypeError('Invalid Guild fetch Type');
    }
  }

  /**
   * Get the guild data and cache it to a variable
   * 
   * @returns The guild data
   */
  async getGuildData(): Promise<GuildResponse> {
    if (!this.#guildData) {
      this.#guildData = await this.#fetchGuildData();
    }
    
    return this.#guildData;
  }

  /**
   * Get the guild
   */
  async get(): Promise<IGuild> {
    return (await this.getGuildData()).guild;
  }

  /**
   * Get the ID of the guild
   */
  async getID(): Promise<string> {
    return (await this.getGuildData()).guild._id;
  }

  /**
   * Get the guild name
   */
  async getName(): Promise<string> {
    return (await this.getGuildData()).guild.name;
  }

  /**
   * Get the guild name in lower case
   */
  async getNameLower(): Promise<string> {
    return (await this.getGuildData()).guild.name_lower;
  }

  /**
   * Get the guild creation timestamp
   */
  async getCreatedAt(): Promise<number> {
    return (await this.getGuildData()).guild.created;
  }

  /**
   * Check if the guild is publicly listed
   */
  async isJoinable(): Promise<boolean> {
    return (await this.getGuildData()).guild.joinable;
  }

  /**
   * Get experience of the guild
   */
  async getExperience(): Promise<number> {
    return (await this.getGuildData()).guild.exp;
  }

  /**
   * Get the level of the guild
   */
  async getLevel(): Promise<number> {
    return GuildLeveling.getLevel((await this.getGuildData()).guild.exp);
  }

  /**
   * Get the guild tag
   */
  async getTag(): Promise<string | null> {
    return (await this.getGuildData()).guild.tag ?? null;
  }

  /**
   * Get the guild tag color
   */
  async getTagColor(): Promise<string | null> {
    return (await this.getGuildData()).guild.tagColor ?? null;
  }

  /**
   * Get the guild legacy ranking
   */
  async getLegacyRanking(): Promise<number> {
    return (await this.getGuildData()).guild.legacyRanking;
  }

  /**
   * Get guild coins amount
   */
  async getCoins(): Promise<number> {
    return (await this.getGuildData()).guild.coins;
  }

  /**
   * Get the guild coins ever amount
   */
  async getCoinsEver(): Promise<number> {
    return (await this.getGuildData()).guild.coinsEver;
  }

  /**
   * Get the members list of the guild
   */
  async getMembers(): Promise<GuildMember[]> {
    return (await this.getGuildData()).guild.members;
  }

  /**
   * Get the achievements of the guild
   */
  async getAchievements(): Promise<GuildAchievements> {
    return (await this.getGuildData()).guild.achievements;
  }

  /**
   * Get preferred games of the guild
   */
  async getPreferredGames(): Promise<string[] | null> {
    return (await this.getGuildData()).guild.preferredGames ?? null;
  }

  /**
   * Get the guild experience by game type
   */
  async getExpByGame(): Promise<GuildExpByType> {
    return (await this.getGuildData()).guild.guildExpByGameType;
  }
}
