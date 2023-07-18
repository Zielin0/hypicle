## Hypicle Utils

This is an internal extension for the Hypicle Client.

**You don't need to use any of the utils functions in your code.**

### Functions

1. `searchParamsFromObj` function:

    This utility function converts an object with query params to a URLSearchParams object.

    Parameters:
    - obj (`T extends Record<String, QueryParam>`) - The object with query params to convert
  
    Returns URLSearchParams object with the query params.

    Example:
    ```ts
    const query: QueryParams = { uuid: '12345', name: 'john' };
    const result = searchParamsFromObj(query); 
    // result: URLSearchParams { 'uuid' => '12345', 'name' => 'john' }
    ```

2. `convertKeysToLowerCase` function:

    This utility function converts all keys in an object to lowercase.

    Parameters:
    - data (`any`) - The source object to convert.
    
    Returns a new object with all keys converted to lowercase.

    Example:
    ```ts
    const src = { Name: 'john', Age: 30 };
    const result = convertKeysToLowerCase(src);
    // result: { name: 'john', age: 30 }
    ```

3. `mapObjectFields` function:

    This utility function applies provided `FieldMap` to an object.

    Parameters:
    - data (`any`) - The source object to be mapped.
    - mapping (`FieldMap<R extends unknown>`) - The object mapping.

    Returns a new object with all properties transformed based on the mapping.

    Example:
    ```ts
    interface SomeType {
      uuid: string,
      username: string,
      age: number,
    }
    
    const obj = {_userid: 123, nickname: 'johndoe1', yearsold: 30};
    const mapping: FieldMap<SomeType> = {
      _userid: 'uuid',
      nickname: 'username',
      yearsold: 'age'
    };

    const result = mapObjectFields(obj, mapping);
    // result: { uuid: 123, username: 'johndoe1', age: 30 }
    ```


Go back to [`docs/`](./README.md)
