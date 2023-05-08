export interface Key {
  success: boolean,
  record: KeyRecord,
}

export interface KeyRecord {
  key: string,
  owner: string,
  limit: number,
  queriesInPastMin: number,
  totalQueries: number,
}
