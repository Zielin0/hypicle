## Hypicle Client

The `Hypicle` Client is the main entry point to interact with the Hypixel API.

To use the client, you need to construct it with your API Key.

### Constructing the Client

To create a new `Hypicle` Client instance, you can follow the steps below:
```ts
import { Hypicle } from 'hypicle';

const client = new Hypicle('YOUR_API_KEY');
```

[How to get the API Key](./README.md#how-to-get-the-api-key)

### Fetching an endpoint

**Hypicle already provides implementation for some endpoints, see [Hypicle Structure](./README.md#hypicle-structure)**.

The `Hypicle` Client implements two fetching methods.

1. `fetch` method:

    The `fetch` method fetches data from the Hypixel API without applying any mappings, it also checks for any errors and then returns the fetched data.

    Parameters:
    - `endpoint` (`string`, required) - The endpoint to fetch data from.
    - `options` (`Options`, optional) - Optional URL parameters for the request.

2. `fetchMapping` method:

    The `fetchMapping` method uses the `fetch` method, it takes a `FieldMap<R>` as one of the parameters, then maps the API response to the provided mapping.

    Parameters:
    - `endpoint` (`string`, required) - The endpoint to fetch data from.
    - `mapping` (`FieldMap<R>`, required) - The map to apply to the fetched data.
    - `options` (`Options`, optional) - Optional URL parameters for the request.

Both methods are async and use Promises.

Example:
```ts
async function callEndpoint<R extends unknown>(client: Client): Promise<R> {
  return await client.fetch<R>('endpoint');
}
```
### Error handling

When Hypixel API fails then Hypicle catches it and throws a custom error interface.

The `HypicleError` interface provides useful information about the error like a message, status code, throttle, and if the throttle is global.

Example error throw:
```ts
throw new HypicleError('Invalid API Key', 403, false);
```

