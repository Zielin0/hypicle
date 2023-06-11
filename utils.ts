import { QueryParam } from './client';

export interface FieldMap<T> {
  [key: string]: keyof T | FieldMap<T[keyof T]>
}

export const searchParamsFromObj = <T extends Record<string, QueryParam>>(obj: T): URLSearchParams => {
  const params = new URLSearchParams();

  Object.keys(obj).forEach(key => {
    const value = obj[key];

    if (typeof value === 'undefined') return;
    if (Array.isArray(value)) {
      params.set(key, value.join(','));
    }

    params.set(key, value.toString());
  });

  return params;
};

export const convertKeysToLowerCase = (data: any) => {
  const result: any = {};
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];
      const lowerCaseKey = key.toLowerCase();

      if (typeof value === 'object' && !Array.isArray(value)) {
        result[lowerCaseKey] = convertKeysToLowerCase(value);
      } else {
        result[lowerCaseKey] = value;
      }
    }
  }
  return result;
};

export const mapObjectFields = <R extends unknown>(data: any, mapping: FieldMap<R>): R => {
  const mapped: Partial<R> = {};

  for (const key in data) {
    if (mapping[key]) {
      if (typeof mapping[key] === 'string') {
        mapped[mapping[key] as keyof R] = data[key];
      } else {
        mapped[key as keyof R] = mapObjectFields(data[key], mapping[key] as FieldMap<R[keyof R]>);
      }
    } else {
      mapped[key as keyof R] = data[key];
    }
  }

  return mapped as R;
};
