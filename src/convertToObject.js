'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const filteredLines = sourceString
    .split(';')
    .filter(line => line.length > 1 && line.includes(':'));

  return filteredLines
    .reduce((object, line) => {
      const [key, value] = line.split(':');

      object[key.trim()] = value.trim();

      return object;
    }, {});
}

module.exports = convertToObject;
