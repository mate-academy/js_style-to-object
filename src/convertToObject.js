'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 1)
    .map(ch => ch.replace(';', '').split(':'));

  const styledProperties = lines.reduce((acc, [key, value]) => {
    acc[key.trim()] = value.trim();

    return acc;
  }, {});

  return styledProperties;
}

module.exports = convertToObject;
