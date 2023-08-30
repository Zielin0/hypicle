<div align="center">
    <h1>Hypicle</h1>
    <p align="center">
        <a href="https://npmjs.com/package/hypicle">
            <img alt="npm-version" src="https://img.shields.io/npm/v/hypicle?style=flat-square" />
        </a>
        <a href="./LICENSE">
            <img alt="repo-license" src="https://img.shields.io/github/license/Zielin0/hypicle?style=flat-square" />
        </a>
        <a href="https://packagephobia.com/result?p=hypicle">
            <img alt="install-size" src="https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=hypicle&query=$.install.pretty&label=install%20size&style=flat-square" />
        </a>
        <a href="https://github.com/Zielin0/hypicle/commits/master">
            <img alt="commit-activity" src="https://img.shields.io/github/commit-activity/m/Zielin0/hypicle?style=flat-square" />
        </a>
    </p>
    <p align="center">
        <h4>Simplified access to player statistics and data from the Hypixel Minecraft server API.</h4>
    </p>
</div>

## Features

- **Player Stats and Data**: Detailed statistics and data for players.
- **Lobby Player Counts**: Real-time information on lobby player numbers.
- **Leaderboard Insights**: Valuable insights into top players across game modes.
- **Punishment Statistics**: Statistics on player bans by staff and watchdog.
- **Active Boosters**: Get the latest information on active server boosters.

## Installation

```shell
$ npm install hypicle@latest
```

## Quick Start

```ts
import { Hypicle } from 'hypicle';

const client = new Hypicle('YOUR_API_KEY');
```

## Full Documentation

See full documentation [here](https://hypicle.zielinus.xyz).

## Examples

See some examples [here](https://github.com/Zielin0/hypicle/tree/master/examples).

## License

This project is under the [MIT](https://github.com/Zielin0/hypicle/tree/master/LICENSE) License.

## Additional Resources

- [**Official Hypixel API Docs**](https://api.hypixel.net/): Detailed API documentation for endpoint information, parameters, and response formats.
