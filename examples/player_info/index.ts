import dayjs from 'dayjs';
import { Hypicle, Player } from 'hypicle';
import { key } from './config.json';

function fail(message: string) {
  console.error(message);
  process.exit(1);
}

async function getUUIDByName(name: string): Promise<string> {
  const response = await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`);
  return (await response.json()).id;
}

async function printPlayerData(player: Player) {
  const dateFormat = 'DD MMM YYYY HH:mm:ss';
  
  const name = await player.getName();
  const rank = await player.getHighestRank();
  const karma = await player.getKarma();
  const level = (await player.getExactLevel()).toFixed(2);

  const firstJoined = dayjs((await player.get())!.firstLogin).format(dateFormat);
  const lastJoined = dayjs((await player.get())!.lastLogin).format(dateFormat);

  const recentGame = await player.getRecentGameType();

  console.log(`${name}'s Hypixel Stats`);
  console.log(`Rank: ${rank}`);
  console.log(`Level: ${level}`);
  console.log(`Karma: ${karma.toLocaleString('en')}`);
  console.log();
  console.log(`First Joined: ${firstJoined}`);
  console.log(`Last Joined: ${lastJoined}`);
  console.log();
  console.log(`Recent Game Type: ${recentGame}`);
}

async function main(argv: string[]) {
  argv = argv.splice(2, argv.length);
  if (argv.length != 1)
    fail('ERROR: Provide a minecraft username.');

  const name = argv[0];
  const uuid = await getUUIDByName(name);
  
  const client = new Hypicle(key);
  const player = new Player(client, uuid);
  printPlayerData(player);
}

main(process.argv);
