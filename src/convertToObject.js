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
  const splitBySemicolon = sourceString.split(';');

  return splitBySemicolon.reduce((accumulator, value) => {
    const splitByColon = value.split(':');

    if (splitByColon.length !== 1) {
      accumulator[splitByColon[0].trim()] = splitByColon[1].trim();
    }

    return accumulator;
  }, {});
}

module.exports = convertToObject;
