## Status Endpoint implementation

Hypixel API Endpoint: `api.hypixel.net/status`

This endpoint returns the Current Online status of a player by uuid

### Usage

Example:
```ts
const status = await getStatus(client, 'uuid');
// result: 'Status' interface with data
```

