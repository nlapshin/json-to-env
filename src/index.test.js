const tap = require('tap');

const converter = require('./');

tap.equal(converter({
  test: 'value'
}), `TEST=value\n`);

tap.equal(converter({
  deep: {
    env: 'value'
  }
}), `DEEP_ENV=value\n`);

tap.equal(converter({
  deep: {
    env1: 'value1',
    env2: 'value2'
  }
}), `DEEP_ENV1=value1\nDEEP_ENV2=value2\n`);

tap.equal(converter({
  deep: {
    env: '$GLOBAL_ENV',
  }
}, { 
  '$GLOBAL_ENV': 'value'
}), `DEEP_ENV=value\n`);