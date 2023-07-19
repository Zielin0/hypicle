import { Client } from '../../client';
import { Guild, Session, getGuildByPlayer, getStatus } from '../index';
import { IPlayer, PlayerResponse, SocialMedia } from './player.types';
import { Stats } from './stats.handler';

/**
 * Player Leveling system
 * @see https://github.com/Plancke/hypixel-php/blob/master/src/util/Leveling.php
 * @class
 */
export class PlayerLeveling {
  private static readonly base: number = 10000;

  private static readonly growth: number = 2500;

  private static readonly half_growth: number = 0.5 * this.growth;

  private static readonly reverse_prefix: number = -(this.base - 0.5 * this.growth) / this.growth;

  private static readonly reverse_const: number = this.reverse_prefix * this.reverse_prefix;

  private static readonly growth_divides: number = 2 / this.growth;

  /**
   * Get exact network level by provided experience
   * 
   * @param exp
   * The network experience
   * @return The exact network level (float)
   */
  public static getExactLevel(exp: number): number {
    return this.getLevel(exp) + this.getPercentageToNextLevel(exp);
  }

  /**
   * Get network level by provided experience
   * 
   * @param exp
   * The network experience
   * @returns The network level
   */
  public static getLevel(exp: number): number {
    return exp < 0 ? 1 : Math.floor(1 + this.reverse_prefix + Math.sqrt(this.reverse_const + this.growth_divides * exp));
  }

  /**
   * Get percentage to the next level
   * 
   * @param exp
   * The network experience
   * @returns The percentage to the next level
   */
  public static getPercentageToNextLevel(exp: number): number {
    const level = this.getLevel(exp);
    const totalExpToLevel = this.getTotalExpToLevel(level);
    return (exp - totalExpToLevel) / (this.getTotalExpToFullLevel(level + 1) - totalExpToLevel);
  }

  /**
   * Get the experience needed to reach provided level
   * 
   * @param level
   * The network level
   * @returns The experience needed to reach provided level
   */
  public static getTotalExpToLevel(level: number): number {
    const lv = Math.floor(level);
    const totalExpToFullLevel = this.getTotalExpToFullLevel(lv);
    if (level === lv) return totalExpToFullLevel;
    return (this.getTotalExpToFullLevel(lv + 1) - totalExpToFullLevel) * (level % 1) + totalExpToFullLevel;
  }

  /**
   * From hypixel-php: `Helper method that may only be called by full levels and has the same functionality as getTotalExpToLevel()
   * but doesn't support progress and returns wrong values for progress due to perfect curve shape.`
   * 
   * @param level
   * The network level
   * @returns The experience needed to reach the full level
   */
  public static getTotalExpToFullLevel(level: number): number {
    return (this.half_growth * (level - 2) + this.base) * (level - 1);
  }
}

/**
 * The Player class
 * This class provides various getters for player data
 * @class
 */
export class Player {
  readonly #client: Client;

  readonly #uuid: string;

  #playerData: PlayerResponse | null = null;

  /**
   * Constructs the Player class by UUID
   * 
   * @param client
   * The Hypicle Client
   * @param uuid
   * The UUID of a player
   */
  constructor(client: Client, uuid: string) {
    this.#client = client;
    this.#uuid = uuid;
  }

  /**
   * Fetch the player data
   * 
   * @returns The fetched player data
   * @private
   */
  async #fetchPlayerData(): Promise<PlayerResponse> {
    return this.#client.fetch<PlayerResponse>('player', { query: { 'uuid': this.#uuid } });
  }

  /**
   * Get the player data and cache it to a variable
   * 
   * @returns The player data
   */
  async getPlayerData(): Promise<PlayerResponse> {
    if (!this.#playerData) {
      this.#playerData = await this.#fetchPlayerData();
    }

    return this.#playerData;
  }

  /**
   * Get the player
   */
  async get(): Promise<IPlayer> {
    return (await this.getPlayerData()).player;
  }

  /**
   * Get the UUID of the player
   */
  async getUUID(): Promise<string> {
    return (await this.getPlayerData()).player.uuid;
  }

  /**
   * Get the status of the player
   */
  async getStatus(): Promise<Session> {
    return (await getStatus(this.#client, this.#uuid)).session;
  }

  /**
   * Get the karma of the player
   */
  async getKarma(): Promise<number> {
    return (await this.getPlayerData()).player.karma;
  }

  /**
   * Get the network experience of the player
   */
  async getNetworkExp(): Promise<number> {
    return (await this.getPlayerData()).player.networkExp;
  }

  /**
   * Get the network level of the player
   */
  async getLevel(): Promise<number> {
    return PlayerLeveling.getLevel((await this.getPlayerData()).player.networkExp);
  }

  /**
   * Get exact network level of the player
   */
  async getExactLevel(): Promise<number> {
    return PlayerLeveling.getExactLevel((await this.getPlayerData()).player.networkExp);
  }

  /**
   * Get the guild membership of the player or null
   */
  async getGuild(): Promise<Guild | null> {
    const { guild } = await getGuildByPlayer(this.#client, this.#uuid);
    return guild ?? null;
  }

  /**
   * Check if the player is in the staff team
   */
  async isStaff(): Promise<boolean> {
    const { rank } = (await this.getPlayerData()).player;

    if (rank !== undefined) {
      return rank !== 'NORMAL';
    }

    return false;
  }

  /**
   * Get the highest rank of the player
   */
  async getHighestRank(): Promise<string> {
    const { rank, monthlyPackageRank, newPackageRank, packageRank } = (await this.getPlayerData()).player;
    const ranks = [rank, monthlyPackageRank, newPackageRank, packageRank];
    const highest = ranks.filter((r) => r !== 'NONE' && r !== undefined)[0];

    return highest ?? 'NONE';
  }

  /**
   * Get the display name of the player
   */
  async getName(): Promise<string> {
    const { displayname, playername } = (await this.getPlayerData()).player;
    return displayname !== null ? displayname : playername;
  }

  /**
   * Get recently played games by the player
   */
  async getRecentGameType(): Promise<string> {
    return (await this.getPlayerData()).player.mostRecentGameType;
  }

  /**
   * Get player connected social media
   */
  async getSocialMedia(): Promise<SocialMedia | null> {
    const { socialMedia } = (await this.getPlayerData()).player;
    return socialMedia ?? null;
  }

  /**
   * Get the player {@link Stats}
   */
  getStats(): Stats {
    return new Stats(this);
  }
}
