# Hypicle Examples

## Simple example
Get the player rank and status

```ts
import { Hypicle, Player } from 'hypicle';

const client = new Hypicle('YOUR_API_KEY');
const player = new Player(client, 'UUID');

const rank = await player.getHighestRank();
const status = await player.getStatus();

console.log(`Rank: ${rank}`);
console.log(`Online: ${status.online}`);
```

## Player info example

See player info example in [`player_info/`](./player_info/)

---

**There will be more examples over time**