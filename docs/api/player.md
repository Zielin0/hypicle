## Player Endpoint implementation

Hypixel API Endpoint: `api.hypixel.net/player`

This endpoint returns the player data by uuid

### Usage

Create a new `Player` object with client and uuid.

```ts
const player = new Player(client, 'uuid');
```

### Other functions

List of all `Player` methods:
- `getPlayerData` - Get the player data and cache it to a variable
- `get` - Get the player
- `getUUID` - Get the UUID of the player
- `getStatus` - Get the status of the player
- `getKarma` - Get the karma of the player
- `getNetworkExp` - Get the network experience of the player
- `getLevel` - Get the network level of the player
- `getExactLevel` - Get exact network level of the player
- `getGuild` - Get the guild membership of the player or null
- `isStaff` - Check if the player is in the staff team
- `getHighestRank` - Get the highest rank of the player
- `getName` - Get the display name of the player
- `getRecentGameType` - Get recently played games by the player
- `getSocialMedia` - Get player connected social media
- `getStats` - Get the player `Stats`

Get stats of the player:
```ts
const stats = player.getStats();
```

Get any minigame stats
```ts
const minigame = stats.getByName('name');
```

List of all `Stats` methods:
- `get` - Get all minigame stats
- `getByName` - Get one minigame stats by the name
- `getBedwars` - Get BedWars-specific stats
- `getSkyWars` - Get SkyWars-specific stats

#### BedWars & SkyWars

Due to the complexity of both minigames, you can get specific stats.

Examples:

  - BedWars
      ```ts
      const bedwars = stats.getBedwars();
      ```

  - SkyWars
      ```ts
      const skywars = stats.getSkyWars();
      ```

List of all `BedwarsMinigame` methods:
- `get` - Get all the BedWars stats
- `getCoins` - Get BedWars coins
- `getLevel` - Get BedWars level (see [Leveling](#leveling))
- `getIronCollected` - Get collected Iron
- `getGoldCollected` - Get collected Gold
- `getDiamondsCollected` - Get collected Diamonds
- `getEmeraldsCollected` - Get collected Emeralds
- `getWinstreak` - Get the current winstreak
- `getKills` - Get BedWars Kills
- `getFinalKills` - Get BedWars final Kills
- `getDeaths` - Get BedWars Deaths
- `getFinalDeaths` - Get BedWars final Deaths
- `getWins` - Get BedWars wins
- `getLosses` - Get BedWars losses
- `getBedsBroken` - Get broken beds amount

List of all `SkyWarsMinigame` methods:
- `get` - Get all the SkyWars stats
- `getCoins` - Get SkyWars coins
- `getLevel` - Get SkyWars level (see [Leveling](#leveling))
- `getSouls` - Get all souls
- `getSoulsGathered` - Get souls gathered
- `getSoulWellUses` - Get uses of the soul well
- `getSoullWellLegendaries` - Get the legendary drops from the soul well
- `getSoulWellRares` - Get the rare drops from the soul well
- `getChestsOpened` - Get the amount of opened chests
- `getBlocksBroken` - Get the amount of broken blocks
- `getBlocksPlaced` - Get the amount of placed blocks
- `getEggs` - Get the amount of thrown Eggs
- `getEnderpearls` - Get the amount of thrown Enderpearls
- `getArrowsShot` - Get the amount of shot arrows
- `getArrowsHit` - Get the amount of arrows that hit
- `getWinstreak` - Get the current winstreak
- `getKills` - Get SkyWars Kills
- `getVoidKills` - Get SkyWars void Kills
- `getAssists` - Get SkyWars Assists
- `getDeaths` - Get SkyWars Deaths
- `getWins` - Get SkyWars wins
- `getLosses` - Get SkyWars losses
- `getHeads` - Get the amount of collected heads
- `getHeadCollection` - Get the head collection


### Leveling

#### Player has its own leveling system.

See [Player](https://github.com/Plancke/hypixel-php/blob/master/src/util/Leveling.php) Leveling system implementation by [Plancke](https://github.com/plancke).

You can use `PlayerLeveling` in your project.

List of all `PlayerLeveling` methods:
- `getExactLevel` - Get exact network level by provided experience
- `getLevel` - Get network level by provided experience
- `getPercentageToNextLevel` - Get percentage to the next level
- `getTotalExpToLevel` - Get the experience needed to reach provided level
- `getTotalExpToFullLevel` - Get the total experience needed to reach provided level

#### Both BedWars and SkyWars also have their own leveling system.

See [SkyWars](https://github.com/Plancke/hypixel-php/blob/master/src/util/games/skywars/ExpCalculator.php) & [BedWars](https://github.com/Plancke/hypixel-php/blob/master/src/util/games/bedwars/ExpCalculator.php) Leveling system implementation by [Plancke](https://github.com/plancke).

You can also use both `BedwarsLeveling` & `SkyWarsLeveling` in your project.

List of all `BedwarsLeveling` methods:
- `getLevelByExp` - Get BedWars Level by provided experience
- `getExpByLevel` - Get BedWars Experience by provided Level

List of all `SkyWarsLeveling` methods:
- `getProgressCurrentLevel` - Get the progress of the current level
- `getLevelByExp` - Get SkyWars Level by provided experience
- `getExpByLevel` - Get SkyWars Experience by provided Level


Go back to [`docs/`](../README.md)
