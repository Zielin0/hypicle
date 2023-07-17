import { BedwarsStats, HeadCollection, SkyWarsStats } from './player.types';
import { Stats } from './stats.handler';

export class BedwarsLeveling {
  private static readonly easy_levels: number = 4;

  private static readonly easy_levels_xp: number[] = [500, 1000, 2000, 3500];

  private static readonly easy_levels_total: number = 7000;

  private static readonly xp_per_level: number = 5000;

  private static readonly xp_per_prestige: number = 96 * this.xp_per_level + this.easy_levels_total;

  private static readonly levels_per_prestige: number = 100;

  public static getLevelByExp(exp: number): number {
    const prestiges: number = Math.floor(exp / this.xp_per_prestige);
    let level: number = prestiges * this.levels_per_prestige;

    let expWithoutPrestiges: number = exp - prestiges * this.xp_per_prestige;
    for (let i: number = 1; i <= this.easy_levels; ++i) {
      const expEasyLevel: number = this.getExpByLevel(i);
      if (expWithoutPrestiges < expEasyLevel)
        break;
      level++;
      expWithoutPrestiges -= expEasyLevel;
    }

    level += Math.floor(expWithoutPrestiges / this.xp_per_level);
    return level;
  }

  public static getExpByLevel(level: number): number {
    if (level === 0) return 0;

    const respected: number = this.getLevelRespectingPrestige(level);
    if (respected <= this.easy_levels)
      return this.easy_levels_xp[respected - 1];

    return this.xp_per_level;
  }

  private static getLevelRespectingPrestige(level: number): number {
    return level % this.levels_per_prestige === 0 ? this.levels_per_prestige : level % this.levels_per_prestige;
  }
}

export class BedwarsMinigame {
  readonly #stats: Stats;

  constructor(stats: Stats) {
    this.#stats = stats;
  }

  async get(): Promise<BedwarsStats | undefined> {
    return (await this.#stats.get())?.Bedwars;
  }

  async getCoins(): Promise<number> {
    return (await this.get())!.coins;
  }

  async getLevel(): Promise<number> {
    return BedwarsLeveling.getLevelByExp((await this.get())!.Experience);
  }

  async getIronCollected(): Promise<number> {
    return (await this.get())!.iron_resources_collected_bedwars;
  }

  async getGoldCollected(): Promise<number> {
    return (await this.get())!.gold_resources_collected_bedwars;
  }

  async getDiamondsCollected(): Promise<number> {
    return (await this.get())!.diamond_resources_collected_bedwars;
  }

  async getEmeraldsCollected(): Promise<number> {
    return (await this.get())!.emerald_resources_collected_bedwars;
  }

  async getWinstreak(): Promise<number> {
    return (await this.get())!.winstreak;
  }

  async getKills(): Promise<number> {
    return (await this.get())!.kills_bedwars;
  }

  async getFinalKills(): Promise<number> {
    return (await this.get())!.final_kills_bedwars;
  }

  async getDeaths(): Promise<number> {
    return (await this.get())!.deaths_bedwars;
  }

  async getFinalDeaths(): Promise<number> {
    return (await this.get())!.final_deaths_bedwars;
  }

  async getWins(): Promise<number> {
    return (await this.get())!.wins_bedwars;
  }

  async getLosses(): Promise<number> {
    return (await this.get())!.losses_bedwars;
  }

  async getBedsBroken(): Promise<number> {
    return (await this.get())!.beds_broken_bedwars;
  }
}

export class SkyWarsLeveling {
  private static readonly easy_levels_xp: number[] = [
    0,
    20,
    50,
    70,
    80,
    100,
    250,
    500,
    1000,
    1500,
    2500,
    4000,
    5000,
  ];

  private static readonly xp_per_level: number = 10000;

  public static getProgressCurrentLevel(exp: number): number {
    const level: number = this.getLevelByExp(exp);
    const levelExp: number = this.getTotalExpByLevel(level);
    return exp - levelExp;
  }

  public static getLevelByExp(exp: number): number {
    if (exp === 0) return 1;
    const easyLevelsLength: number = this.easy_levels_xp.length;

    let easyLevelExp: number = 0;
    for (let i: number = 0; i <= easyLevelsLength; i++) {
      const expPerLevel: number = this.getExpByLevel(i + 1);
      easyLevelExp += expPerLevel;
      if (exp < easyLevelExp)
        return i - 1;
    }

    const extraLevels: number = (exp - easyLevelExp) / this.xp_per_level;
    return easyLevelsLength + extraLevels;
  }

  public static getExpByLevel(level: number): number {
    if (level <= this.easy_levels_xp.length)
      return this.easy_levels_xp[level - 1];

    return this.xp_per_level;
  }

  private static getTotalExpByLevel(level: number): number {
    const easyLevelsLength: number = this.easy_levels_xp.length;

    let totalExp: number = 0;
    const easyLevels: number = Math.min(level, easyLevelsLength);
    for (let i: number = 0; i < easyLevels; i++) {
      totalExp += this.easy_levels_xp[i];
    }

    if (level > easyLevelsLength) {
      const extraLevels: number = level - easyLevelsLength;
      totalExp += extraLevels * this.xp_per_level;
    }

    return totalExp;
  }
}

export class SkyWarsMinigame {
  readonly #stats: Stats;

  constructor(stats: Stats) {
    this.#stats = stats;
  }

  async get(): Promise<SkyWarsStats | undefined> {
    return (await this.#stats.get())?.SkyWars;
  }

  async getCoins(): Promise<number> {
    return (await this.get())!.coins;
  }

  async getLevel(): Promise<number> {
    return SkyWarsLeveling.getLevelByExp((await this.get())!.skywars_experience);
  }

  async getSouls(): Promise<number> {
    return (await this.get())!.souls;
  }

  async getSoulsGathered(): Promise<number> {
    return (await this.get())!.souls_gathered;
  }

  async getSoulWellUses(): Promise<number> {
    return (await this.get())!.soul_well;
  }

  async getSoullWellLegendaries(): Promise<number> {
    return (await this.get())!.soul_well_legendaries;
  }

  async getSoulWellRares(): Promise<number> {
    return (await this.get())!.soul_well_rares;
  }

  async getChestsOpened(): Promise<number> {
    return (await this.get())!.chests_opened;
  }

  async getBlocksBroken(): Promise<number> {
    return (await this.get())!.blocks_broken;
  }

  async getBlocksPlaced(): Promise<number> {
    return (await this.get())!.blocks_placed;
  }

  async getEggs(): Promise<number> {
    return (await this.get())!.egg_thrown;
  }

  async getEnderpearls(): Promise<number> {
    return (await this.get())!.enderpearls_thrown;
  }

  async getArrowsShot(): Promise<number> {
    return (await this.get())!.arrows_shot;
  }

  async getArrowsHit(): Promise<number> {
    return (await this.get())!.arrows_hit;
  }

  async getWinstreak(): Promise<number> {
    return (await this.get())!.win_streak;
  }

  async getKills(): Promise<number> {
    return (await this.get())!.kills;
  }

  async getVoidKills(): Promise<number> {
    return (await this.get())!.void_kills;
  }

  async getAssists(): Promise<number> {
    return (await this.get())!.assists;
  }

  async getDeaths(): Promise<number> {
    return (await this.get())!.deaths;
  }

  async getWins(): Promise<number> {
    return (await this.get())!.wins;
  }

  async getLosses(): Promise<number> {
    return (await this.get())!.losses;
  }

  async getHeads(): Promise<number> {
    return (await this.get())!.heads;
  }

  async getHeadCollection(): Promise<HeadCollection> {
    return (await this.get())!.head_collection;
  }
}
