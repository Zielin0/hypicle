import { QueryParam } from './client';

/**
 * Represents a mapping of field names to their corresponding properties in a type `T`.
 * The keys of the mapping are strings, and the values can be either keys of `T` or nested `FieldMap` objects.
 * 
 * @template T
 * The type for which the field mapping is defined
 */
export interface FieldMap<T> {
  [key: string]: keyof T | FieldMap<T[keyof T]>
}

/**
 * Converts an object with query parameters to a URLSearchParams object.
 * 
 * @template T
 * The type of the input object, which must extend `Record<string, QueryParam>`
 * @param {T} obj
 * The object with query parameters to convert
 * @returns {URLSearchParams} An URLSearchParams object containing the converted query parameters
 */
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

/**
 * Converts keys in object to lowercase
 * 
 * @param data
 * The source object to convert
 * @returns A new object with all keys converted to lowercase
 */
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

/**
 * Applies the {@link FieldMap} to an object, transforming its properties based on the specified mapping.
 * 
 * @template R
 * The type of the resulting mapped object
 * @param dataR
 * The source object to be mapped
 * @param mappingR
 * The mapping that defines how properties should be transformed
 * @returns The resulting object with properties transformed based on the mapping
 */
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
