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
  const splitString = sourceString.split(';');
  const styleList = {};

  splitString.forEach(item => {
    if (item.trim().length) {
      const parameter = item.split(':');
      const resultKey = parameter[0].trim();
      const resultValue = parameter[1].trim();

      styleList[resultKey] = resultValue;
    }
  });

  return styleList;
}

module.exports = convertToObject;
