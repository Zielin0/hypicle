# Hypicle v1.0.0

## How to get the API Key?

1. Visit the [Hypixel Developer Dashboard](https://developer.hypixel.net/).
2. Log in.
3. Generate and Copy a new Development Key.

## Quick Start

```ts
import { Hypicle } from 'hypicle';

const client = new Hypicle('YOUR_API_KEY');
```

## Hypicle Structure

- [api/](./api/README.md)
  - [api/boosters](./api/boosters.md) - Currently active boosters
  - [api/counts](./api/counts.md) - Active players count
  - [api/guild](./api/guild.md) - Guild information
  - [api/key](./api/key.md) - API Key information
  - [api/leaderboards](./api/leaderboards.md) - Global Leaderboards information
  - [api/player](./api/player.md) - Player information & statistics
  - [api/punishments](./api/punishments.md) - Punishment statistics
  - [api/recentgames](./api/recentgames.md) - Recent games of a player
  - [api/status](./api/status.md) - Status of a player
  
- [client.ts](./client.md) - The Hypicle Client
- [utils.ts](./utils.md) - The Hypicle Utils
