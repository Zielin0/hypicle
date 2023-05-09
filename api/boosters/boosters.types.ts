export interface Boosters {
  success: boolean,
  boosters: Booster[],
  boosterState: BoosterState,
}

export interface Booster {
  _id: string,
  purchaserUuid: string,
  amount: number,
  originalLength: number,
  length: number,
  gameType: number,
  dateActivated: number,
}

export interface BoosterState {
  decrementing: boolean,
}
