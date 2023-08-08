export interface GuildResponse {
  success: boolean,
  guild: IGuild,
}

export interface IGuild {
  _id: string,
  name: string,
  name_lower: string,
  description: string,
  tag: string,
  tagColor: string,
  coins: number,
  exp: number,
  coinsEver: number,
  created: number,
  joinable: boolean,
  publiclyListed: boolean,
  legacyRanking: number,
  members: GuildMember[],
  achievements: GuildAchievements,
  preferredGames: string[],
  guildExpByGameType: GuildExpByType,
}

export interface GuildMember {
  joined: number,
  uuid: string,
  name: string | undefined,
  rank: string,
  questParticipation: number,
  mutedTill: number | undefined,
  expHistory: ExpHistory,
}

export type ExpHistory = {
  [key: string]: number;
};

export interface GuildAchievements {
  ONLINE_PLAYERS: number,
  EXPERIENCE_KINGS: number,
  WINNERS: number,
}

export interface GuildExpByType {
  SKYBLOCK: number,
  SURVIVAL_GAMES: number,
  TNTGAMES: number,
  QUAKECRAFT: number,
  UHC: number,
  LEGACY: number,
  VAMPIREZ: number,
  MCGO: number,
  BEDWARS: number,
  BATTLEGROUND: number,
  SMP: number,
  WALLS3: number,
  DUELS: number,
  ARENA: number,
  WOOL_GAMES: number,
  ARCADE: number,
  BUILD_BATTLE: number,
  MURDER_MYSTERY: number,
  PIT: number,
  HOUSING: number,
  PAINTBALL: number,
  SKYWARS: number,
  PROTOTYPE: number,
  WALLS: number,
  SUPER_SMASH: number,
  SPEED_UHC: number,
  REPLAY: number,
  GINGERBREAD: number,
}

export type GuildType = 'id' | 'name' | 'player';
