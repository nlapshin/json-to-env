# json-to-env2

Convert json to key-value environment pairs with the ability to use dynamic setpoints

# Install

```sh
npm i json-to-env2
```

# Usage

## Simple example

Script:
```js
  const jsonToEnv = require('json-to-env2');

  const json = {
    deep: {
      env1: 'value1',
      env2: 'value2'
    }
  }

  const env = jsonToEnv(json);
```

Env:
```js
  DEEP_ENV1=value1
  DEEP_ENV2=value2
```

## Example with the dynamic replacement

Script:
```js
  const jsonToEnv = require('json-to-env2');

  const json = {
    deep: {
      env: '$DYNAMIC_ENV',
    }
  }

  const mapping = {
    $DYNAMIC_ENV: 'value'
  }

  const env = jsonToEnv(json, mapping);
```

Env:
```js
  DEEP_ENV=value
```

## Example with the dynamic substring replacement

Script:
```js
  const jsonToEnv = require('json-to-env2');

  const json = {
    deep: {
      env: 'prefix-$DYNAMIC_ENV',
    }
  }

  const mapping = {
    $DYNAMIC_ENV: 'value'
  }

  const env = jsonToEnv(json, mapping);
```

Env:
```js
  DEEP_ENV=prefix-value
```

# Test

```sh
npm run test
```

# License

MIT © [nlapshin](https://www.npmjs.com/~nlapshin)