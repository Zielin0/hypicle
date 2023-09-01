## Leaderboards Endpoint implementation

Hypixel API Endpoint: `api.hypixel.net/leaderboards`

This endpoint returns Current Leaderboards

### Usage

Example:
```ts
const leaderboards = await getLeaderboards(client);
// result: 'Leaderboards' interface with data
```

### Other functions

This endpoint also implements game/lobby specific getters.

Game/Lobby specific getter returns `Leaderboard[]`.

List of all getters:
- `getLeaderboards` - Get global Leaderboards statistics
- `getLeaderboardsDuels` - Get global Duels Leaderboards statistics
- `getLeaderboardsTrueCombat` - Get global Crazy Walls Leaderboards statistics
- `getLeaderboardsSpeedUhc` - Get global SpeedUHC Leaderboards statistics
- `getLeaderboardsPaintball` - Get global Paintball Leaderboards statistics
- `getLeaderboardsMurderMystery` - Get global Murder Mystery Leaderboards statistics
- `getLeaderboardsSkywars` - Get global SkyWars Leaderboards statistics
- `getLeaderboardsBedwars` - Get global BedWars Leaderboards statistics
- `getLeaderboardsPrototype` - Get global Prototype Leaderboards statistics
- `getLeaderboardsGingerbread` - Get global Turbo Kart Racers Leaderboards statistics
- `getLeaderboardsWoolGames` - Get global Wool Wars Leaderboards statistics
- `getLeaderboardsTntGames` - Get global TNT Games Leaderboards statistics
- `getLeaderboardsUhc` - Get global UHC Leaderboards statistics
- `getLeaderboardsBuildBattle` - Get global Build Battle Leaderboards statistics
- `getLeaderboardsWalls3` - Get global Mega Walls Leaderboards statistics
- `getLeaderboardsVampirez` - Get global VampireZ Leaderboards statistics
- `getLeaderboardsArcade` - Get global Arcade Leaderboards statistics
- `getLeaderboardsWalls` - Get global Walls Leaderboards statistics
- `getLeaderboardsSurvivalGames` - Get global Survival Games Leaderboards statistics
- `getLeaderboardsSuperSmash` - Get global Smash Heroes Leaderboards statistics
- `getLeaderboardsSkyclash` - Get global SkyClash Leaderboards statistics
- `getLeaderboardsQuakecraft` - Get global Quake Leaderboards statistics
- `getLeaderboardsMCGO` - Get global Cops and Crims Leaderboards statistics
- `getLeaderboardsBattleground` - Get global Warlords Leaderboards statistics
- `getLeaderboardsArena` - Get global Arena Leaderboards statistics

