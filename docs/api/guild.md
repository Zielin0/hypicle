## Guild Endpoint implementation

Hypixel API Endpoint: `api.hypixel.net/guild`

This endpoint returns Guild data by a player, name or id

### Usage

Example:
```ts
const guild = await getGuildByPlayer(client, 'uuid');
// result: 'GuildResponse' interface with data
```

### Other function

You can also get a Guild by the name or id.

List of all getters:
- `getGuildByPlayer` - Get Guild info by player UUID
- `getGuildByID` - Get Guild info by Guild ID
- `getGuildByName` - Get Guild info by Guild Name


Go back to [`docs/`](../README.md)
