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

---

**There will be more examples over time**