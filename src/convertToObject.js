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
  const resultObject = {};
  const splittedSource = sourceString.split(';');

  for (const s of splittedSource) {
    const splittedRow = s.trim().split(':');

    if (splittedRow.length === 2) {
      const property = splittedRow[0].trim();
      const value = splittedRow[1].trim();

      resultObject[property] = value;
    }
  }

  return resultObject;
}

module.exports = convertToObject;
