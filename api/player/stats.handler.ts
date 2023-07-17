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

export class Stats {
  readonly player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  async get(): Promise<PlayerStats | undefined> {
    return (await this.player.getPlayerData()).player.stats;
  }

  async getByName<T extends keyof MinigameStatsMap>(
    minigame: T,
  ): Promise<MinigameStatsMap[T] | undefined> {
    return (await this.get())?.[minigame];
  }

  getBedwars(): BedwarsMinigame {
    return new BedwarsMinigame(this);
  }

  getSkyWars(): SkyWarsMinigame {
    return new SkyWarsMinigame(this);
  }
}