/* eslint-disable max-len */
'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const normalized = sourceString.split(':').map(x => x.trim()).join(': ');

  normalized.split(';').map(x => x.trim()).filter(y => y !== '').forEach(z => {
    const [key, value] = z.split(': ');

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
