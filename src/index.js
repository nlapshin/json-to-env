const objectDeepIteration = require('object-deep-iteration');

module.exports = (json, mapping = {}) => {
  let str = ''

  objectDeepIteration(json, (jsonValue, path) => {
    if (typeof jsonValue === 'object') {
      return;
    }

    const name = convertPath(path);
    const envValue = convertValue(jsonValue, mapping);

    str += `${name}=${envValue}\n`
  })

  return str;
}

function convertPath(path) {
  return path.toUpperCase().replace(/\./, '_');
}

function convertValue(jsonValue, mapping) {
  if (typeof jsonValue !== 'string') {
    return jsonValue;
  }

  for (let key in mapping) {
    if (mapping.hasOwnProperty(key)) {
      jsonValue = jsonValue.replace(key, mapping[key])
    }
  }

  return jsonValue;
}
