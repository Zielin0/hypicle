## Guild Endpoint implementation

Hypixel API Endpoint: `api.hypixel.net/guild`

This endpoint returns Guild data by a player, name or id

### Usage

Create a new `Guild` object with client, id and guild type.

Example:
```ts
const guild = new Guild(client, 'guild name', 'name');
```

### Other functions

List of all `Guild` methods:
- `getGuildData` - Get the guild data and cache it to a variable
- `get` - Get the guild
- `getID` - Get the ID of the guild
- `getName` - Get the guild name
- `getNameLower` - Get the guild name in lower case
- `getDescription` - Get the description of the guild
- `getCreatedAt` - Get the guild creation timestamp
- `isJoinable` - Check if the guild is joinable
- `isPubliclyListed` - Check if the guild is publicly listed
- `getExperience` - Get experience of the guild
- `getLevel` - Get the level of the guild (see [Leveling](#leveling))
- `getTag` - Get the guild tag
- `getTagColor` - Get the guild tag color
- `getLegacyRanking` - Get the guild legacy ranking
- `getCoins` - Get guild coins amount
- `getCoinsEver` - Get the guild coins ever amount
- `getMembersCount` - Get the members count of the guild
- `getMembers` - Get the members list of the guild
- `getAchievements` - Get the achievements of the guild
- `getPreferredGames` - Get preferred games of the guild
- `getExpByGame` - Get the guild experience by game type

### Leveling

#### Guild has its own leveling system.

See [Guild](https://github.com/Plancke/hypixel-php/blob/master/src/responses/guild/GuildLevelUtil.php) Leveling system implementation by [Plancke](https://github.com/plancke).

You can use `GuildLeveling` in your project.

List of all `GuildLeveling` methods:
- `getLevel` - Get guild level by provided experience

