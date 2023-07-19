import { Client } from '../../client';
import { Leaderboard, Leaderboards } from './leaderboards.types';

/**
 * Get global Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global {@link Leaderboards} statistics
 */
export const getLeaderboards = async (client: Client) => {
  return await client.fetch<Leaderboards>('leaderboards');
};

/**
 * Get global Duels Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global Duels {@link Leaderboards} statistics
 */
export const getLeaderboardsDuels = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.duels as Leaderboard[];
};

/**
 * Get global Crazy Walls Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global Crazy Walls {@link Leaderboards} statistics
 */

export const getLeaderboardsTrueCombat = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.true_combat as Leaderboard[];
};

/**
 * Get global SpeedUHC Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global SpeedUHC {@link Leaderboards} statistics
 */
export const getLeaderboardsSpeedUhc = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.speed_uhc as Leaderboard[];
};

/**
 * Get global Paintball Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global Paintball {@link Leaderboards} statistics
 */
export const getLeaderboardsPaintball = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.paintball as Leaderboard[];
};

/**
 * Get global Murder Mystery Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global Murder Mystery {@link Leaderboards} statistics
 */
export const getLeaderboardsMurderMystery = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.murder_mystery as Leaderboard[];
};

/**
 * Get global SkyWars Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global SkyWars {@link Leaderboards} statistics
 */
export const getLeaderboardsSkywars = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.skywars as Leaderboard[];
};

/**
 * Get global BedWars Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global BedWars {@link Leaderboards} statistics
 */
export const getLeaderboardsBedwars = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.bedwars as Leaderboard[];
};

/**
 * Get global Prototype Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global Prototype {@link Leaderboards} statistics
 */
export const getLeaderboardsPrototype = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.prototype as Leaderboard[];
};

/**
 * Get global Turbo Kart Racers Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global Turbo Kart Racers {@link Leaderboards} statistics
 */
export const getLeaderboardsGingerbread = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.gingerbread as Leaderboard[];
};

/**
 * Get global Wool Wars Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global Wool Wars {@link Leaderboards} statistics
 */
export const getLeaderboardsWoolGames = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.wool_games as Leaderboard[];
};

/**
 * Get global TNT Games Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global TNT Games {@link Leaderboards} statistics
 */
export const getLeaderboardsTntGames = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.tntgames as Leaderboard[];
};

/**
 * Get global UHC Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global UHC {@link Leaderboards} statistics
 */
export const getLeaderboardsUhc = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.uhc as Leaderboard[];
};

/**
 * Get global Build Battle Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global Build Battle {@link Leaderboards} statistics
 */
export const getLeaderboardsBuildBattle = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.build_battle as Leaderboard[];
};

/**
 * Get global Mega Walls Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global Mega Walls {@link Leaderboards} statistics
 */
export const getLeaderboardsWalls3 = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.walls3 as Leaderboard[];
};

/**
 * Get global VampireZ Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global VampireZ {@link Leaderboards} statistics
 */
export const getLeaderboardsVampirez = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.vampirez as Leaderboard[];
};

/**
 * Get global Arcade Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global Arcade {@link Leaderboards} statistics
 */
export const getLeaderboardsArcade = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.arcade as Leaderboard[];
};

/**
 * Get global Walls Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global Walls {@link Leaderboards} statistics
 */
export const getLeaderboardsWalls = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.walls as Leaderboard[];
};

/**
 * Get global Survival Games  Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global Survival Games {@link Leaderboards} statistics
 */
export const getLeaderboardsSurvivalGames = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.survival_games as Leaderboard[];
};

/**
 * Get global Smash Heroes Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global Smash Heroes {@link Leaderboards} statistics
 */
export const getLeaderboardsSuperSmash = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.super_smash as Leaderboard[];
};

/**
 * Get global SkyClash Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global SkyClash {@link Leaderboards} statistics
 */
export const getLeaderboardsSkyclash = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.skyclash as Leaderboard[];
};

/**
 * Get global Quake Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global Quake {@link Leaderboards} statistics
 */
export const getLeaderboardsQuakecraft = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.quakecraft as Leaderboard[];
};

/**
 * Get global Cops and Crims Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global Cops and Crims {@link Leaderboards} statistics
 */
export const getLeaderboardsMCGO = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.mcgo as Leaderboard[];
};

/**
 * Get global Warlords Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global Warlords {@link Leaderboards} statistics
 */
export const getLeaderboardsBattleground = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.battleground as Leaderboard[];
};

/**
 * Get global Arena Leaderboards statistics
 * 
 * @param client
 * The Hypicle Client
 * @returns Global Arena {@link Leaderboards} statistics
 */
export const getLeaderboardsArena = async (client: Client) => {
  const lb = await getLeaderboards(client);
  return lb.leaderboards.arena as Leaderboard[];
};
