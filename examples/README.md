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

Running:

```sh
$ cd examples/player_info
$ cp config.example.json config.json
```

Replace `API_KEY` with your actual api key.

```sh
$ npm install
$ ts-node index.ts <player-name>
```

See player info example code in [`player_info/`](./player_info/)

---

**There will be more examples over time**