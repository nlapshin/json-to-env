const objectDeepIteration = require('object-deep-iteration');

module.exports = (json, mapping = {}) => {
  let str = ''

  objectDeepIteration(json, (jsonValue, path) => {
    if (typeof jsonValue === 'object') {
      return;
    }

    const name = path.toUpperCase().replace(/\./, '_');
    const envValue = mapping[jsonValue] ? mapping[jsonValue] : jsonValue;

    str += `${name}=${envValue}\n`
  })

  return str;
}