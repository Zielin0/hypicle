export interface Leaderboards {
  success: boolean,
  leaderboards: LeaderboardGames,
}

export interface LeaderboardGames {
  duels: Leaderboard[],
  true_combat: Leaderboard[],
  speed_uhc: Leaderboard[],
  paintball: Leaderboard[],
  murder_mystery: Leaderboard[],
  skywars: Leaderboard[],
  bedwars: Leaderboard[],
  prototype: Leaderboard[],
  gingerbread: Leaderboard[],
  wool_games: Leaderboard[],
  tntgames: Leaderboard[],
  uhc: Leaderboard[],
  build_battle: Leaderboard[],
  walls3: Leaderboard[],
  vampirez: Leaderboard[],
  arcade: Leaderboard[],
  walls: Leaderboard[],
  survival_games: Leaderboard[],
  super_smash: Leaderboard[],
  skyclash: Leaderboard[],
  quakecraft: Leaderboard[],
  mcgo: Leaderboard[],
  battleground: Leaderboard[],
  arena: Leaderboard[],
}

export interface Leaderboard {
  path: string,
  prefix: string,
  title: string,
  location: string,
  count: number,
  leaders: string[],
}
