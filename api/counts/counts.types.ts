export interface Counts {
  success: boolean,
  games: Games,
  players: number,
}

export interface Games {
  main_lobby: MainLobby,
  tournament_lobby: TournamentLobby,
  smp: SMP,
  legacy: Legacy,
  skywars: Skywars,
  pit: Pit,
  build_battle: BuildBattle,
  replay: Replay,
  walls: Walls,
  super_smash: SuperSmash,
  bedwars: Bedwars,
  arcade: Arcade,
  murder_mystery: MurderMystery,
  uhc: UHC,
  wool_games: WoolGames,
  speed_uhc: SpeedUhc,
  housing: Housing,
  duels: Duels,
  tntgames: TntGames,
  battleground: Battleground,
  survival_games: SurvivalGames,
  skyblock: SkyBlock,
  prototype: Prototype,
  mcgo: MCGO,
  limbo: Limbo,
  idle: Idle,
  queue: Queue,
}

export interface Default {
  players: number,
}

export interface MainLobby extends Default {}

export interface TournamentLobby extends Default {}

export interface SMP extends Default {}

export interface Legacy extends Default {
  modes: LegacyModes,
}

export interface LegacyModes {
  walls: number,
  paintball: number,
  quakecraft: number,
  vampirez: number,
  gingerbread: number,
  arena: number
}

export interface Skywars extends Default {
  modes: SkywarsModes,
}

export interface SkywarsModes {
  solo_lucky: number,
  teams_lucky: number,
  solo_insane: number,
  teams_insane: number,
  solo_normal: number,
  teams_normal: number,
}

export interface Pit extends Default {
  modes: PitModes,
}

export interface PitModes {
  pit: number,
}

export interface BuildBattle extends Default {
  modes: BuildBattleModes,
}

export interface BuildBattleModes {
  solo_normal_latest: number,
  guess_the_build: number,
  teams_normal: number,
  solo_normal: number,
  solo_pro: number,

}

export interface Replay extends Default {
  modes: ReplayModes,
}

export interface ReplayModes {
  base: number,
}

export interface Walls extends Default {
  modes: WallsModes,
}

export interface WallsModes {
  standard: number,
}

export interface SuperSmash extends Default {
  modes: SmashModes,
}

export interface SmashModes {
  duel: number,
  friends: number,
  solo: number,
  teams: number,
}

export interface Bedwars extends Default {
  modes: BedwarsModes,
}

export interface BedwarsModes {
  two_four: number,
  four_three: number,
  eight_one: number,
  eight_two_armed: number,
  four_four: number,
  eight_two: number,
  eight_two_lucky: number,
  practice: number,
  eight_two_ultimate: number,
}

export interface Arcade extends Default {
  modes: ArcadeModes,
}

export interface ArcadeModes {
  party: number,
  hole_in_the_wall: number,
  defender: number,
  mini_walls: number,
  simon_says: number,
  zombies_bad_blood: number,
  hide_and_seek_party: number,
  dayone: number,
  draw_their_thing: number,
  zombies_alien: number,
  pixel_party: number,
  one_in_the_quiver: number,
  soccer: number,
  pvp_ctw: number,
  ender: number,
  starwars: number,
  dragon_war: number,
  zombies_dead_end: number,
  farm_hunt: number,
  hide_and_seek_hunt: number,
}

export interface MurderMystery extends Default {
  modes: MurderMysteryModes,
}

export interface MurderMysteryModes {
  double_up: number,
  infection: number,
  assassins: number,
  classic: number,
}

export interface UHC extends Default {
  modes: UHCModes,
}

export interface UHCModes {
  teams: number,
  solo: number,
}

export interface WoolGames extends Default {
  modes: WoolGamesModes,
}

export interface WoolGamesModes {
  wars_two_four: number,
}

export interface SpeedUhc extends Default {
  modes: SpeedUhcModes,
}

export interface SpeedUhcModes {
  solo_normal: number,
  team_normal: number,
}

export interface Housing extends Default {}

export interface Duels extends Default {
  modes: DuelsModes,
}

export interface DuelsModes {
  bowspleef_duel: number,
  bow_duel: number,
  bridge_four_two: number,
  uhc_four: number,
  mw_duel: number,
  uhc_meetup: number,
  bridge_doubles: number,
  sw_doubles: number,
  boxing_duel: number,
  uhc_doubles: number,
  bridge_four: number,
  bridge_four_three: number,
  uhc_duel: number,
  sumo_duel: number,
  op_doubles: number,
  bridge_threes: number,
  parkour_eight: number,
  op_duel: number,
  blitz_duel: number,
  potion_duel: number,
  classic_duel: number,
  combo_duel: number,
  bridge_duel: number,
  sw_duel: number,
  capture_threes: number,
}

export interface TntGames extends Default {
  modes: TntGamesModes,
}

export interface TntGamesModes {
  pvp_run: number,
  tnt_tag: number,
  tnt_run: number,
  capture: number,
  bow_spleef: number,
}

export interface Battleground extends Default {
  modes: BattlegroundModes,
}

export interface BattlegroundModes {
  ctf_mini: number,
  domination: number,
  team_deathmatch: number,
}

export interface SurvivalGames extends Default {
  modes: SurvivalGamesModes,
}

export interface SurvivalGamesModes {
  solo_normal: number,
  teams_normal: number,
}

export interface SkyBlock extends Default {
  modes: SkyBlockModes,
}

export interface SkyBlockModes {
  instanced: number,
  garden: number,
  dungeon_hub: number,
  farming: number,
  mining: number,
  crimson_isle: number,
  mining_two: number,
  crystal_hollows: number,
  combat: number,
  dynamic: number,
  winter: number,
  combat_two: number,
  foraging: number,
  hub: number,
  dungeon: number,
  mining_three: number,
}

export interface Prototype extends Default {
  modes: PrototypeModes,
}

export interface PrototypeModes {
  dropper: number,
}

export interface MCGO extends Default {
  modes: MCGOModes,
}

export interface MCGOModes {
  normal: number,
  normal_party: number,
  gungame: number,
  deathmatch: number,
}

export interface Limbo extends Default {}

export interface Idle extends Default {}

export interface Queue extends Default {}
