# Hypicle changelog (v1.0.0 - present)

## [1.1.4] - 2023-08-30
### Documentation
- Some fixes here and there

## [1.1.3] - 2023-08-21
### Fixes
- `/key` endpoint is no longer available

## [1.1.2] - 2023-08-08
### New Features
- `getDescription` getter on `Guild`
- `isPubliclyListed` getter on `Guild`
- `getMembersCount` getter on `Guild`

### Fixes
- This update fixes #6

## [1.1.1] - 2023-08-08
### Fixes
- Don't throw an error if `Guild` is null

## [1.1.0] - 2023-08-08
### New Features
- `Guild` class with getters for data.

## [1.0.6] - 2023-08-07
### New Features
- `getPlusColor` - Get the rank plus color on player

## [1.0.5] - 2023-08-06
### Fixes
- Add some missing fields to `ArcadeStats` interface.

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