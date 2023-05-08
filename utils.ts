export interface FieldMap<T> {
  [key: string]: keyof T | FieldMap<T[keyof T]>
}
