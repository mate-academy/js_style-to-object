'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split(';').filter(a => a.includes(':'));

  return lines.reduce((obj, line) => {
    const params = line.split(':');

    return {
      ...obj, [params[0].trim()]: params[1].trim(),
    };
  }, {});
}

module.exports = convertToObject;
