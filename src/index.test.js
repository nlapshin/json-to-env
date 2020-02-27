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
    env2: 'value2',
    env3: 1
  }
}), `DEEP_ENV1=value1\nDEEP_ENV2=value2\nDEEP_ENV3=1\n`);

tap.equal(converter({
  deep: {
    env: '$GLOBAL_ENV',
  }
}, { 
  '$GLOBAL_ENV': 'value'
}), `DEEP_ENV=value\n`);

tap.equal(converter({
  deep: {
    env: 'prefix_$GLOBAL_ENV',
  }
}, { 
  '$GLOBAL_ENV': 'value'
}), `DEEP_ENV=prefix_value\n`);