export interface Status {
  success: boolean,
  uuid: string,
  session: Session,
}

export interface Session {
  online: boolean,
  gameType: string,
  mode: string,
  map: string,
}
