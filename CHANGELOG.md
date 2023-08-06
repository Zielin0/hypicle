# Hypicle changelog (v1.0.0 - present)

## [1.0.4] - 2023-08-06
### Fixes
- Issue with undefined fields in `api/player/minigames.handler.ts`.

## [1.0.3] - 2023-08-05
### Fixes
- Add missing fields to `TNTGamesStats` interface.
- Return `<? | undefined>` on getters from `minigames.handler.ts` (`?` means any type that is in code).

## [1.0.2] - 2023-08-04
### Fixes
- Fixed typo in `minigames.handler.ts`:  `getSoullWellLegendaries` -> `getSoulWellLegendaries`.

## [1.0.1] - 2023-08-03
### Fixes
- Throw an error if the player is null.

## [1.0.0] - 2023-07-24
### New Features

- **boosters**: Provides information about currently active boosters.
- **counts**: Retrieves the count of active players.
- **guild**: Fetches detailed guild information.
- **key**: Retrieves key information.
- **leaderboards**: Gives access to global leaderboards data.
- **player**: Provides comprehensive player information and statistics.
- **punishments**: Offers statistics related to player punishments.
- **recentgames**: Fetches recent games of a player.
- **status**: Provides status information of a player.

### Documentation

- The library now includes comprehensive documentation for each API endpoint, making it easier for developers to understand and use the available features.