'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const sourceArray = sourceString.split(';');

  sourceArray.forEach((elem) => {
    const separatorPosition = elem.indexOf(':');

    if (separatorPosition !== -1) {
      const propertiesKey = elem.slice(0, separatorPosition).trim();
      const propertiesValue = elem.slice(separatorPosition + 1).trim();

      result[propertiesKey] = propertiesValue;
    }
  });

  return result;
}

module.exports = convertToObject;
