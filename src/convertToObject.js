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
  const converted = {};
  const getArray = sourceString.split(';');

  getArray.map((item) => {
    const getValues = item.split(':');

    if (getValues.length === 2) {
      const getKey = getValues[0].trim();
      const getValue = getValues[1].trim();

      converted[getKey] = getValue;
    }
  })

  return converted;
}

module.exports = convertToObject;
