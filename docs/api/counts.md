## Counts Endpoint implementation

Hypixel API Endpoint: `api.hypixel.net/counts`

This endpoint returns Current Player Count Status.

### Usage

Example:
```ts
const counts = await getCounts(client);
// result: 'Counts' interface with data
```

### Other functions

This endpoint also implements game/lobby specific getters.

List of all getters:
- `getCounts` - Get global active players count statistics
- `getMainLobby` - Get active players count statistics in Main Lobby
- `getTournamentLobby` - Get active players count statistics in Tournament Lobby
- `getSMP` - Get active players count statistics in SMP Servers
- `getLegacy` - Get active players count statistics in Legacy Games
- `getSkywars` - Get active players count statistics in SkyWars
- `getPit` - Get active players count statistics in Pit
- `getBuildBattle` - Get active players count statistics in Build Battle
- `getReplay` - Get active players count statistics in Replays
- `getWalls` - Get active players count statistics in Walls
- `getSuperSmash` - Get active players count statistics in Smash Heroes
- `getBedwars` - Get active players count statistics in BedWars
- `getArcade` - Get active players count statistics in Arcade Games
- `getMurderMystery` - Get active players count statistics in Murder Mystery
- `getUhc` - Get active players count statistics in UHC
- `getWoolGames` - Get active players count statistics in Wool Wars
- `getSpeedUhc` - Get active players count statistics in Speed UHC
- `getHousing` - Get active players count statistics in Housing
- `getDuels` - Get active players count statistics in Duels
- `getTntGames` - Get active players count statistics in TNT Games
- `getBattleground` - Get active players count statistics in Warlords
- `getSurvivalGames` - Get active players count statistics in Survival Games
- `getSkyblock` - Get active players count statistics in SkyBlock
- `getPrototype` - Get active players count statistics in Prototype Games
- `getMCGO` - Get active players count statistics in Cops and Crims
- `getLimbo` - Get active players count statistics in Limbo
- `getIdle` - Get active Idle players count statistics
- `getQueue` - Get active players count statistics in Queue


Go back to [`docs/`](../README.md)
