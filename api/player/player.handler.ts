import { Client } from '../../client';
import { IPlayer, PlayerResponse, SocialMedia } from './player.types';
import { getStatus, Session } from '../index';
import { Stats } from './stats.handler';

export class Player {
  readonly #client: Client;

  readonly #uuid: string;

  #playerData: PlayerResponse | null = null;

  constructor(client: Client, uuid: string) {
    this.#client = client;
    this.#uuid = uuid;
  }

  async #fetchPlayerData(): Promise<PlayerResponse> {
    return this.#client.fetch<PlayerResponse>('player', { query: { 'uuid': this.#uuid } });
  }

  async getPlayerData(): Promise<PlayerResponse> {
    if (!this.#playerData) {
      this.#playerData = await this.#fetchPlayerData();
    }

    return this.#playerData;
  }

  async get(): Promise<IPlayer> {
    return (await this.getPlayerData()).player;
  }

  async getUUID(): Promise<string> {
    return (await this.getPlayerData()).player.uuid;
  }

  async getStatus(): Promise<Session> {
    return (await getStatus(this.#client, this.#uuid)).session;
  }

  async isStaff(): Promise<boolean> {
    const { rank } = (await this.getPlayerData()).player;

    if (rank !== undefined) {
      return rank !== 'NORMAL';
    }

    return false;
  }

  async getHighestRank(): Promise<string> {
    const { rank, monthlyPackageRank, newPackageRank, packageRank } = (await this.getPlayerData()).player;
    const highest = [rank, monthlyPackageRank, newPackageRank, packageRank].find(Boolean);

    return highest ?? 'NONE';
  }

  async getName(): Promise<string> {
    const { displayname, playername } = (await this.getPlayerData()).player;
    return displayname !== null ? displayname : playername;
  }

  async getRecentGameType(): Promise<string> {
    return (await this.getPlayerData()).player.mostRecentGameType;
  }

  async getSocialMedia(): Promise<SocialMedia | null> {
    const { socialMedia } = (await this.getPlayerData()).player;
    return socialMedia ?? null;
  }

  getStats(): Stats {
    return new Stats(this);
  }
}
