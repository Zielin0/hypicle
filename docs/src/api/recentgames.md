## Recent Games Endpoint implementation

Hypixel API Endpoint: `api.hypixel.net/recentgames`

This endpoint returns Recently played games of a specific player by uuid

### Usage

Example:
```ts
const recentgames = await getRecentgames(client, 'uuid');
// result: 'Recentgames' interface with data
```

