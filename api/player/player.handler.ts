import { Client } from '../../client';
import { Guild, Session, getGuildByPlayer, getStatus } from '../index';
import { IPlayer, PlayerResponse, SocialMedia } from './player.types';
import { Stats } from './stats.handler';

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
   * @param client - The Hypicle Client
   * @param uuid - The UUID of a player
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
