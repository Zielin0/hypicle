import { Client } from '../../client';
import {
  ArcadeStats,
  ArenaStats,
  BattlegroundStats,
  BedwarsStats,
  BuildBattleStats,
  DuelsStats,
  GingerBreadStats, HousingStats,
  HungerGamesStats,
  IPlayer,
  LegacyStats, MainLobbyStats,
  MCGOStats,
  MurderMysteryStats,
  PaintballStats,
  PlayerResponse,
  PlayerStats,
  QuakeStats,
  SkyBlockStats,
  SkyWarsStats,
  SocialMedia,
  SpeedUHCStats,
  SuperSmashStats,
  TNTGamesStats,
  UHCStats,
  VampireZStats,
  Walls3Stats,
  WallsStats,
  WoolGamesStats,
} from './player.types';
import { Session, getStatus } from '../index';

export class Stats {
  readonly #player: Player;

  constructor(player: Player) {
    this.#player = player;
  }

  async get(): Promise<PlayerStats | undefined> {
    return (await this.#player.getPlayerData()).player.stats;
  }

  async getBedwars(): Promise<BedwarsStats | undefined> {
    return (await this.get())?.Bedwars;
  }

  async getSkyWars(): Promise<SkyWarsStats | undefined> {
    return (await this.get())?.SkyWars;
  }

  async getDuels(): Promise<DuelsStats | undefined> {
    return (await this.get())?.Duels;
  }

  async getHungerGames(): Promise<HungerGamesStats | undefined> {
    return (await this.get())?.HungerGames;
  }

  async getSuperSmash(): Promise<SuperSmashStats | undefined> {
    return (await this.get())?.SuperSmash;
  }

  async getBattleground(): Promise<BattlegroundStats | undefined> {
    return (await this.get())?.Battleground;
  }

  async getArcade(): Promise<ArcadeStats | undefined> {
    return (await this.get())?.Arcade;
  }

  async getMCGO(): Promise<MCGOStats | undefined> {
    return (await this.get())?.MCGO;
  }

  async getGingerBread(): Promise<GingerBreadStats | undefined> {
    return (await this.get())?.GingerBread;
  }

  async getVampireZ(): Promise<VampireZStats | undefined> {
    return (await this.get())?.VampireZ;
  }

  async getPaintball(): Promise<PaintballStats | undefined> {
    return (await this.get())?.Paintball;
  }

  async getQuake(): Promise<QuakeStats | undefined> {
    return (await this.get())?.Quake;
  }

  async getLegacy(): Promise<LegacyStats | undefined> {
    return (await this.get())?.Legacy;
  }

  async getTNTGames(): Promise<TNTGamesStats | undefined> {
    return (await this.get())?.TNTGames;
  }

  async getUHC(): Promise<UHCStats | undefined> {
    return (await this.get())?.UHC;
  }

  async getSpeedUHC(): Promise<SpeedUHCStats | undefined> {
    return (await this.get())?.SpeedUHC;
  }

  async getWalls3(): Promise<Walls3Stats | undefined> {
    return (await this.get())?.Walls3;
  }

  async getMurderMystery(): Promise<MurderMysteryStats | undefined> {
    return (await this.get())?.MurderMystery;
  }

  async getBuildBattle(): Promise<BuildBattleStats | undefined> {
    return (await this.get())?.BuildBattle;
  }

  async getSkyBlock(): Promise<SkyBlockStats | undefined> {
    return (await this.get())?.SkyBlock;
  }

  async getWalls(): Promise<WallsStats | undefined> {
    return (await this.get())?.Walls;
  }

  async getArena(): Promise<ArenaStats | undefined> {
    return (await this.get())?.Arena;
  }

  async getWoolGames(): Promise<WoolGamesStats | undefined> {
    return (await this.get())?.WoolGames;
  }

  async getMainLobby(): Promise<MainLobbyStats | undefined> {
    return (await this.get())?.MainLobby;
  }

  async getHousing(): Promise<HousingStats | undefined> {
    return (await this.get())?.Housing;
  }
}

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
