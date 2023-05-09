export interface Recentgames {
  success: boolean,
  uuid: string,
  games: Game[],
}

export interface Game {
  date: number,
  gameType: string,
  mode: string,
  map: string,
  ended: number,
}
