import { BedwarsStats, HeadCollection, SkyWarsStats } from './player.types';
import { Stats } from './stats.handler';

/**
 * Bedwars Leveling system
 * @see https://github.com/Plancke/hypixel-php/blob/master/src/util/games/bedwars/ExpCalculator.php
 * @class
 */
export class BedwarsLeveling {
  private static readonly easy_levels: number = 4;

  private static readonly easy_levels_xp: number[] = [500, 1000, 2000, 3500];

  private static readonly easy_levels_total: number = 7000;

  private static readonly xp_per_level: number = 5000;

  private static readonly xp_per_prestige: number = 96 * this.xp_per_level + this.easy_levels_total;

  private static readonly levels_per_prestige: number = 100;

  /**
   * Get BedWars Level by provided experience
   * 
   * @param exp
   * The BedWars Experience
   * @returns The BedWars Level based on the experience
   */
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

  /**
   * Get BedWars Experience by provided Level
   * 
   * @param level
   * The BedWars Level
   * @returns The BedWars Experience based on the Level
   */
  public static getExpByLevel(level: number): number {
    if (level === 0) return 0;

    const respected: number = this.getLevelRespectingPrestige(level);
    if (respected <= this.easy_levels)
      return this.easy_levels_xp[respected - 1];

    return this.xp_per_level;
  }

  /**
   * From hypixel-php: `Returns "2" instead of "102" if prestiges happen every 100 levels`
   * 
   * @param level
   * The BedWars Level
   * @returns The Level respecting the prestige
   */
  private static getLevelRespectingPrestige(level: number): number {
    return level % this.levels_per_prestige === 0 ? this.levels_per_prestige : level % this.levels_per_prestige;
  }
}

/**
 * Get stats from the BedWars Minigame
 * @class
 */
export class BedwarsMinigame {
  readonly #stats: Stats;

  /**
   * Constructs the BedwarsMinigame class
   * 
   * @param stats
   * The {@link Stats} of the player
   */
  constructor(stats: Stats) {
    this.#stats = stats;
  }

  /**
   * Get all the BedWars stats
   */
  async get(): Promise<BedwarsStats | undefined> {
    return (await this.#stats.get())?.Bedwars;
  }

  /**
   * Get BedWars coins
   */
  async getCoins(): Promise<number | undefined> {
    return (await this.get())?.coins;
  }

  /**
   * Get BedWars level
   */
  async getLevel(): Promise<number> {
    return BedwarsLeveling.getLevelByExp((await this.get())!.Experience);
  }

  /**
   * Get collected Iron
   */
  async getIronCollected(): Promise<number | undefined> {
    return (await this.get())?.iron_resources_collected_bedwars;
  }

  /**
   * Get collected Gold
   */
  async getGoldCollected(): Promise<number | undefined> {
    return (await this.get())?.gold_resources_collected_bedwars;
  }

  /**
   * Get collected Diamonds
   */
  async getDiamondsCollected(): Promise<number | undefined> {
    return (await this.get())?.diamond_resources_collected_bedwars;
  }

  /**
   * Get collected Emeralds
   */
  async getEmeraldsCollected(): Promise<number | undefined> {
    return (await this.get())?.emerald_resources_collected_bedwars;
  }

  /**
   * Get the current winstreak
   */
  async getWinstreak(): Promise<number | undefined> {
    return (await this.get())?.winstreak;
  }

  /**
   * Get BedWars Kills
   */
  async getKills(): Promise<number | undefined> {
    return (await this.get())?.kills_bedwars;
  }

  /**
   * Get BedWars final Kills
   */
  async getFinalKills(): Promise<number | undefined> {
    return (await this.get())?.final_kills_bedwars;
  }

  /**
   * Get BedWars Deaths
   */
  async getDeaths(): Promise<number | undefined> {
    return (await this.get())?.deaths_bedwars;
  }

  /**
   * Get BedWars final Deaths
   */
  async getFinalDeaths(): Promise<number | undefined> {
    return (await this.get())?.final_deaths_bedwars;
  }

  /**
   * Get BedWars wins
   */
  async getWins(): Promise<number | undefined> {
    return (await this.get())?.wins_bedwars;
  }

  /**
   * Get BedWars losses
   */
  async getLosses(): Promise<number | undefined> {
    return (await this.get())?.losses_bedwars;
  }

  /**
   * Get broken beds amount
   */
  async getBedsBroken(): Promise<number | undefined> {
    return (await this.get())?.beds_broken_bedwars;
  }
}

/**
 * SkyWars Leveling system
 * @see https://github.com/Plancke/hypixel-php/blob/master/src/util/games/skywars/ExpCalculator.php
 * @class
 */
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

  /**
   * Get the progress of the current level
   * 
   * @param exp
   * The SkyWars experience
   * @returns The experience progress of the current level
   */
  public static getProgressCurrentLevel(exp: number): number {
    const level: number = this.getLevelByExp(exp);
    const levelExp: number = this.getTotalExpByLevel(level);
    return exp - levelExp;
  }

  /**
   * Get SkyWars Level by provided experience
   * 
   * @param exp
   * The SkyWars Experience
   * @returns The SkyWars Level based on the experience
   */
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

  /**
   * Get SkyWars Experience by provided Level
   * 
   * @param level
   * The SkyWars Level
   * @returns The SkyWars Experience based on the Level
   */
  public static getExpByLevel(level: number): number {
    if (level <= this.easy_levels_xp.length)
      return this.easy_levels_xp[level - 1];

    return this.xp_per_level;
  }

  /**
   * Get the total experience by provided Level
   * 
   * @param level
   * The SkyWars Level
   * @returns Total SkyWars experience based on the Level
   */
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

/**
 * Get stats from the SkyWars Minigame
 * @class
 */
export class SkyWarsMinigame {
  readonly #stats: Stats;

  /**
   * Constructs the SkywarsMinigame class
   * 
   * @param stats
   * The {@link Stats} of the player
   */
  constructor(stats: Stats) {
    this.#stats = stats;
  }

  /**
   * Get all the SkyWars stats
   */
  async get(): Promise<SkyWarsStats | undefined> {
    return (await this.#stats.get())?.SkyWars;
  }

  /**
   * Get SkyWars coins
   */
  async getCoins(): Promise<number | undefined> {
    return (await this.get())?.coins;
  }

  /**
   * Get SkyWars level
   */
  async getLevel(): Promise<number> {
    return SkyWarsLeveling.getLevelByExp((await this.get())!.skywars_experience);
  }

  /**
   * Get all souls
   */
  async getSouls(): Promise<number | undefined> {
    return (await this.get())?.souls;
  }

  /**
   * Get souls gathered
   */
  async getSoulsGathered(): Promise<number | undefined> {
    return (await this.get())?.souls_gathered;
  }

  /**
   * Get uses of the soul well
   */
  async getSoulWellUses(): Promise<number | undefined> {
    return (await this.get())?.soul_well;
  }

  /**
   * Get the legendary drops from the soul well
   */
  async getSoulWellLegendaries(): Promise<number | undefined> {
    return (await this.get())?.soul_well_legendaries;
  }

  /**
   * Get the rare drops from the soul well
   */
  async getSoulWellRares(): Promise<number | undefined> {
    return (await this.get())?.soul_well_rares;
  }

  /**
   * Get the amount of opened chests
   */
  async getChestsOpened(): Promise<number | undefined> {
    return (await this.get())?.chests_opened;
  }

  /**
   * Get the amount of broken blocks
   */
  async getBlocksBroken(): Promise<number | undefined> {
    return (await this.get())?.blocks_broken;
  }

  /**
   * Get the amount of placed blocks
   */
  async getBlocksPlaced(): Promise<number | undefined> {
    return (await this.get())?.blocks_placed;
  }

  /**
   * Get the amount of thrown Eggs
   */
  async getEggs(): Promise<number | undefined> {
    return (await this.get())?.egg_thrown;
  }

  /**
   * Get the amount of thrown Enderpearls
   */
  async getEnderpearls(): Promise<number | undefined> {
    return (await this.get())?.enderpearls_thrown;
  }

  /**
   * Get the amount of shot arrows
   */
  async getArrowsShot(): Promise<number | undefined> {
    return (await this.get())?.arrows_shot;
  }

  /**
   * Get the amount of arrows that hit
   */
  async getArrowsHit(): Promise<number | undefined> {
    return (await this.get())?.arrows_hit;
  }

  /**
   * Get the current winstreak
   */
  async getWinstreak(): Promise<number | undefined> {
    return (await this.get())?.win_streak;
  }

  /**
   * Get SkyWars Kills
   */
  async getKills(): Promise<number | undefined> {
    return (await this.get())?.kills;
  }

  /**
   * Get SkyWars void Kills
   */
  async getVoidKills(): Promise<number | undefined> {
    return (await this.get())?.void_kills;
  }

  /**
   * Get SkyWars Assists
   */
  async getAssists(): Promise<number | undefined> {
    return (await this.get())?.assists;
  }

  /**
   * Get SkyWars Deaths
   */
  async getDeaths(): Promise<number | undefined> {
    return (await this.get())?.deaths;
  }

  /**
   * Get SkyWars wins
   */
  async getWins(): Promise<number | undefined> {
    return (await this.get())?.wins;
  }

  /**
   * Get SkyWars losses
   */
  async getLosses(): Promise<number | undefined> {
    return (await this.get())?.losses;
  }

  /**
   * Get the amount of collected heads
   */
  async getHeads(): Promise<number | undefined> {
    return (await this.get())?.heads;
  }

  /**
   * Get the head collection
   */
  async getHeadCollection(): Promise<HeadCollection | undefined> {
    return (await this.get())?.head_collection;
  }
}
