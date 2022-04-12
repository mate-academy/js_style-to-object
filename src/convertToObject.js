'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const res = {};

  const keys = sourceString.split(';').map(ex => ex.trim())
    .filter(e => e.length > 0);

  keys.forEach(key => {
    const part = key.split(':');
    const prop = part[0].trim();
    const value = part[1].trim();

    res[prop] = value;
  });

  return res;
}

module.exports = convertToObject;
