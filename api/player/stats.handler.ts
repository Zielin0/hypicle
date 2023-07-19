import { BedwarsMinigame, SkyWarsMinigame } from './minigames.handler';
import { Player } from './player.handler';
import {
  ArcadeStats,
  ArenaStats,
  BattlegroundStats,
  BedwarsStats,
  BuildBattleStats,
  DuelsStats,
  GingerBreadStats,
  HousingStats,
  HungerGamesStats,
  LegacyStats,
  MCGOStats,
  MainLobbyStats,
  MurderMysteryStats,
  PaintballStats,
  PlayerStats,
  QuakeStats,
  SkyBlockStats,
  SkyWarsStats,
  SpeedUHCStats,
  SuperSmashStats,
  TNTGamesStats,
  UHCStats,
  VampireZStats,
  Walls3Stats,
  WallsStats,
  WoolGamesStats,
} from './player.types';

type MinigameStatsMap = {
  Bedwars: BedwarsStats;
  SkyWars: SkyWarsStats;
  Duels: DuelsStats;
  HungerGames: HungerGamesStats;
  SuperSmash: SuperSmashStats;
  Battleground: BattlegroundStats;
  Arcade: ArcadeStats;
  MCGO: MCGOStats;
  GingerBread: GingerBreadStats;
  VampireZ: VampireZStats;
  Paintball: PaintballStats;
  Quake: QuakeStats;
  Legacy: LegacyStats;
  TNTGames: TNTGamesStats;
  UHC: UHCStats;
  SpeedUHC: SpeedUHCStats;
  Walls3: Walls3Stats;
  MurderMystery: MurderMysteryStats;
  BuildBattle: BuildBattleStats;
  SkyBlock: SkyBlockStats;
  Walls: WallsStats;
  Arena: ArenaStats;
  WoolGames: WoolGamesStats;
  MainLobby: MainLobbyStats;
  Housing: HousingStats;
};

/**
 * Get various minigame stats from the {@link Player}
 * @class
 */
export class Stats {
  readonly player: Player;

  /**
   * Constructs the Stats class
   * 
   * @param player
   * The Player instance for which the statistics are collected
   */
  constructor(player: Player) {
    this.player = player;
  }

  /**
   * Get all minigame stats
   */
  async get(): Promise<PlayerStats | undefined> {
    return (await this.player.getPlayerData()).player.stats;
  }

  /**
   * Get one minigame stats by the name
   * 
   * @param minigame
   * The name of the minigame for which the method returns stats
   * @returns The stats interface for the provided minigame
   */
  async getByName<T extends keyof MinigameStatsMap>(
    minigame: T,
  ): Promise<MinigameStatsMap[T] | undefined> {
    return (await this.get())?.[minigame];
  }

  /**
   * Get BedWars-specific stats
   */
  getBedwars(): BedwarsMinigame {
    return new BedwarsMinigame(this);
  }

  /**
   * Get SkyWars-specific stats
   */
  getSkyWars(): SkyWarsMinigame {
    return new SkyWarsMinigame(this);
  }
}