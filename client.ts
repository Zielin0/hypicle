import {
  convertKeysToLowerCase,
  FieldMap,
  mapObjectFields,
  searchParamsFromObj,
} from './utils';

interface Options {
  query?: QueryParams,
}

export type QueryParam = string | number | boolean | undefined | string[];
export type QueryParams = Record<string, QueryParam>;

export interface Client {
  fetchMapping<R extends unknown>(
    endpoint: string,
    mapping: FieldMap<R>,
    options?: Options,
  ): Promise<R>;
  fetch<R extends unknown>(
    endpoint: string,
    options?: Options,
  ): Promise<R>;
}

interface HypixelError {
  success: boolean,
  cause: string,
  throttle?: boolean,
  global?: boolean,
}

export class HypicleError extends Error {
  constructor(message: string, public readonly status: number) {
    super(message);
    this.name = 'HypicleError' + status;
  }
}

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
        throw new HypicleError("Couldn't read response body", res.status);
      }

      throw new HypicleError(error.cause, res.status);
    };

    const res = await call();

    return await res.json() as R;
  }
}
