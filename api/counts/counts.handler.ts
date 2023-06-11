import { Client } from '../../client';
import {
  Arcade, Battleground,
  Bedwars,
  BuildBattle,
  Counts, Duels, Housing, Idle,
  Legacy, Limbo,
  MainLobby, MCGO, MurderMystery,
  Pit, Prototype, Queue,
  Replay, SkyBlock,
  Skywars,
  SMP, SpeedUhc, SuperSmash, SurvivalGames, TntGames,
  TournamentLobby, UHC,
  Walls, WoolGames,
} from './counts.types';
import { FieldMap } from '../../utils';

const mapping: FieldMap<Counts> = {
  success: 'success',
  games: {
    skywars: {
      modes: {
        solo_insane_lucky: 'solo_lucky',
        teams_insane_lucky: 'teams_lucky',
      },
    },
    build_battle: {
      modes: {
        build_battle_solo_normal_latest: 'solo_normal_latest',
        build_battle_guess_the_build: 'guess_the_build',
        build_battle_teams_normal: 'teams_normal',
        build_battle_solo_normal: 'solo_normal',
        build_battle_solo_pro: 'solo_pro',
      },
    },
    super_smash: {
      modes: {
        '1v1_normal': 'duel',
        friends_normal: 'friends',
        solo_normal: 'solo',
        teams_normal: 'teams',
      },
    },
    bedwars: {
      modes: {
        bedwars_two_four: 'two_four',
        bedwars_four_three: 'four_three',
        bedwars_eight_one: 'eight_one',
        bedwars_eight_two_armed: 'eight_two_armed',
        bedwars_four_four: 'four_four',
        bedwars_eight_two: 'eight_two',
        bedwars_eight_two_lucky: 'eight_two_lucky',
        bedwars_practice: 'practice',
        bedwars_eight_two_ultimate: 'eight_two_ultimate',
      },
    },
    arcade: {
      modes: {
        hide_and_seek_party_proper: 'hide_and_seek_party',
        zombies_alien_arcadium: 'zombies_alien',
        pixel_party_hyper: 'pixel_party',
        oneinthequiver: 'one_in_the_quiver',
        hide_and_seek_prop_hunt: 'hide_and_seek_hunt',
      },
    },
    murder_mystery: {
      modes: {
        murder_double_up: 'double_up',
        murder_infection: 'infection',
        murder_assassins: 'assassins',
        murder_classic: 'classic',
      },
    },
    wool_games: {
      modes: {
        wool_wars_two_four: 'wars_two_four',
      },
    },
    duels: {
      modes: {
        duels_bowspleef_duel: 'bowspleef_duel',
        duels_bow_duel: 'bow_duel',
        duels_uhc_four: 'uhc_four',
        duels_mw_duel: 'mw_duel',
        duels_uhc_meetup: 'uhc_meetup',
        duels_bridge_doubles: 'bridge_doubles',
        duels_uhc_duel: 'uhc_duel',
        duels_sumo_duel: 'sumo_duel',
        duels_op_doubles: 'op_doubles',
        duels_capture_threes: 'capture_threes',
        duels_parkour_eight: 'parkour_eight',
        duels_op_duel: 'op_duel',
        duels_blitz_duel: 'blitz_duel',
        duels_potion_duel: 'potion_duel',
        duels_classic_duel: 'classic_duel',
        duels_combo_duel: 'combo_duel',
        duels_bridge_duel: 'bridge_duel',
        duels_sw_duel: 'sw_duel',
        duels_sw_doubles: 'sw_doubles',
        duels_boxing_duel: 'boxing_duel',
        duels_uhc_doubles: 'uhc_doubles',
        duels_bridge_four: 'bridge_four',
        duels_bridge_threes: 'bridge_threes',
      },
    },
    tntgames: {
      modes: {
        pvprun: 'pvp_run',
        tntag: 'tnt_tag',
        tntrun: 'tnt_run',
        bowspleef: 'bow_spleef',
      },
    },
    skyblock: {
      modes: {
        farming_1: 'farming',
        mining_2: 'mining',
        mining_3: 'mining_two',
        combat_3: 'combat',
        combat_1: 'combat_two',
        foraging_1: 'foraging',
        mining_1: 'mining_three',
      },
    },
  },
  playercount: 'players',
};

export const getCounts = async (client: Client) => {
  return await client.fetchMapping<Counts>('counts', mapping);
};

export const getMainLobby = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.main_lobby as MainLobby;
};

export const getTournamentLobby = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.tournament_lobby as TournamentLobby;
};

export const getSMP = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.smp as SMP;
};

export const getLegacy = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.legacy as Legacy;
};

export const getSkywars = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.skywars as Skywars;
};

export const getPit = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.pit as Pit;
};

export const getBuildBattle = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.build_battle as BuildBattle;
};

export const getReplay = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.replay as Replay;
};

export const getWalls = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.walls as Walls;
};

export const getSuperSmash = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.super_smash as SuperSmash;
};

export const getBedwars = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.bedwars as Bedwars;
};

export const getArcade = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.arcade as Arcade;
};

export const getMurderMystery = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.murder_mystery as MurderMystery;
};

export const getUhc = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.uhc as UHC;
};

export const getWoolGames = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.wool_games as WoolGames;
};

export const getSpeedUhc = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.speed_uhc as SpeedUhc;
};

export const getHousing = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.housing as Housing;
};

export const getDuels = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.duels as Duels;
};

export const getTntGames = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.tntgames as TntGames;
};

export const getBattleground = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.battleground as Battleground;
};

export const getSurvivalGames = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.survival_games as SurvivalGames;
};

export const getSkyblock = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.skyblock as SkyBlock;
};

export const getPrototype = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.prototype as Prototype;
};

export const getMCGO = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.mcgo as MCGO;
};

export const getLimbo = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.limbo as Limbo;
};

export const getIdle = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.idle as Idle;
};

export const getQueue = async (client: Client) => {
  const counts = await getCounts(client);
  return counts.games.queue as Queue;
};
