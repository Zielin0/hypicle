import { Client } from '../../client';
import { Leaderboard, Leaderboards } from './leaderboards.types';
import { FieldMap } from '../../utils';

const mapping : FieldMap<Leaderboards> = {};

export const getLeaderboards = async (client: Client) => {
  return await client.fetchMapping<Leaderboards>('leaderboards', mapping);
};

export const getLeaderboardsDuels = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.duels as Leaderboard[];
};

export const getLeaderboardsTrueCombat = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.true_combat as Leaderboard[];
};

export const getLeaderboardsSpeedUhc = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.speed_uhc as Leaderboard[];
};

export const getLeaderboardsPaintball = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.paintball as Leaderboard[];
};

export const getLeaderboardsMurderMystery = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.murder_mystery as Leaderboard[];
};

export const getLeaderboardsSkywars = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.skywars as Leaderboard[];
};

export const getLeaderboardsBedwars = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.bedwars as Leaderboard[];
};

export const getLeaderboardsPrototype = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.prototype as Leaderboard[];
};

export const getLeaderboardsGingerbread = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.gingerbread as Leaderboard[];
};

export const getLeaderboardsWoolGames = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.wool_games as Leaderboard[];
};

export const getLeaderboardsTntGames = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.tntgames as Leaderboard[];
};

export const getLeaderboardsUhc = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.uhc as Leaderboard[];
};

export const getLeaderboardsBuildBattle = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.build_battle as Leaderboard[];
};

export const getLeaderboardsWalls3 = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.walls3 as Leaderboard[];
};

export const getLeaderboardsVampirez = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.vampirez as Leaderboard[];
};

export const getLeaderboardsArcade = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.arcade as Leaderboard[];
};

export const getLeaderboardsWalls = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.walls as Leaderboard[];
};

export const getLeaderboardsSurvivalGames = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.survival_games as Leaderboard[];
};

export const getLeaderboardsSuperSmash = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.super_smash as Leaderboard[];
};

export const getLeaderboardsSkyclash = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.skyclash as Leaderboard[];
};

export const getLeaderboardsQuakecraft = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.quakecraft as Leaderboard[];
};

export const getLeaderboardsMCGO = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.mcgo as Leaderboard[];
};

export const getLeaderboardsBattleground = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.battleground as Leaderboard[];
};

export const getLeaderboardsArena = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.arena as Leaderboard[];
};
