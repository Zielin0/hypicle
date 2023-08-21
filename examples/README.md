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

## Hypicler

**Hypicler is a web app for checking some stats from hypixel**

- Source Code: [Zielin0/hypicler](https://github.com/Zielin0/hypicler)
- Try It: [hypicler.pages.dev](https://hypicler.pages.dev)

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