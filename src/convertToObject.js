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
  const lines = sourceString.split('\n');

  const removeSemicolon = line => line.replace(';', '');

  const isNotEmptyLine = line => line.trim().length !== 0;

  const formatedLine = lines
    .map(removeSemicolon)
    .filter(isNotEmptyLine)
    .reduce((result, line) => {
      const arr = line.split(':').map(lineKey => lineKey.trim());
      const [key, value] = arr;

      result[key] = value;

      return result;
    }, {});

  return formatedLine;
}

module.exports = convertToObject;
