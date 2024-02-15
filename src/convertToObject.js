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
  const objectValuesCSS = {};

  sourceString
    .split(';')
    .filter((arrayFilter) => arrayFilter.trim().length > 0)
    .map((element) => {
      const elementSplit = element.split(':');
      const key = elementSplit[0].trim();
      const value = elementSplit[1].trim();

      objectValuesCSS[key] = value;
    });

  return objectValuesCSS;
}

module.exports = convertToObject;
