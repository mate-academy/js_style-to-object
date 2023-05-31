'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const processedArray = sourceString.split(';');

  for (let i = 0; i < processedArray.length; i++) {
    const indexColon = processedArray[i].indexOf(':');

    if (indexColon > 0) {
      const key = processedArray[i].slice(0, indexColon).trim();
      const values = processedArray[i].slice(indexColon + 1).trim();

      result[key] = values;
    }
  }

  return result;
}

module.exports = convertToObject;
