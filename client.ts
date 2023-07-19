import {
  convertKeysToLowerCase,
  FieldMap,
  mapObjectFields,
  searchParamsFromObj,
} from './utils';

/**
 * Represents options for fetch methods
 * @interface
 */
interface Options {
  query?: QueryParams,
}

export type QueryParam = string | number | boolean | undefined | string[];
export type QueryParams = Record<string, QueryParam>;

/**
 * A HTTP Client interface that provides fetch methods
 * @interface
 */
export interface Client {
  /**
   * Fetches data from the specified endpoint and applies the {@link FieldMap}
   * 
   * @param endpoint
   * The endpoint to fetch data from
   * @param mapping
   * The Field Mapping to applly to the fetched data
   * @param options
   * Optional parameters for the request
   * @returns A Promise that resolves to the fetched data with applied mapping
   */
  fetchMapping<R extends unknown>(
    endpoint: string,
    mapping: FieldMap<R>,
    options?: Options,
  ): Promise<R>;

  /**
   * Fetches data from the specified endpoint
   * 
   * @param endpoint
   * The endpoint to fetch data from
   * @param options
   * Optional parameters for the request
   * @returns A Promise that resolves to the fetched data
   */
  fetch<R extends unknown>(
    endpoint: string,
    options?: Options,
  ): Promise<R>;
}

/**
 * Represents an error response from the Hypixel API
 * @interface
 */
interface HypixelError {
  success: boolean,
  cause: string,
  throttle?: boolean,
  global?: boolean,
}

/**
 * Custom error interface
 * @class
 */
export class HypicleError extends Error {
  public readonly success: boolean;

  public readonly throttle?: boolean;

  public readonly global?: boolean;

  /**
   * Constructs new {@link HypicleError}
   * 
   * @param message
   * The error message
   * @param status
   * The HTTP error status code from {@link HypixelError}
   * @param success
   * Indicates whether the API request was successful
   * @param throttle
   * Indicates if the error is due to a throttle restriction on the API
   * @param global
   * Indicates if the throttle is applied to all users
   */
  constructor(message: string, public readonly status: number, success: boolean, throttle?: boolean, global?: boolean) {
    super(message);
    this.name = 'HypicleError' + status;

    this.success = success;
    this.throttle = throttle;
    this.global = global;
  }
}

/**
 * The Hypixel API Client implementation
 * @class
 */
export class Hypicle implements Client {

  readonly #key: string;

  constructor(key: string) {
    this.#key = key;
  }

  async fetchMapping<R extends unknown>(
    endpoint: string,
    mapping: FieldMap<R>,
    options?: Options,
  ): Promise<R> {
    const response = await this.fetch<R>(endpoint, options);

    const mapped = mapObjectFields<R>(convertKeysToLowerCase(response), mapping);

    return mapped as R;
  }

  async fetch<R extends unknown>(
    endpoint: string,
    options?: Options,
  ): Promise<R> {
    const url = new URL('https://api.hypixel.net/' + endpoint);
    if (options?.query) {
      url.search = searchParamsFromObj(options.query).toString();
    }

    const call = async (): Promise<Response> => {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'API-Key': this.#key,
        },
      });

      if (res.ok) return res;

      let error: HypixelError;

      try {
        error = await res.json() as HypixelError;
      } catch (_) {
        throw new HypicleError("Couldn't read response body", res.status, false);
      }

      throw new HypicleError(error.cause, res.status, false);
    };

    const res = await call();

    return await res.json() as R;
  }
}
