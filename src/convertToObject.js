'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 *  CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const str = sourceString.split(';');
  let resultObj = {};

  for (const element of str) {
    if (element.includes(':')) {
      const objElement = {
        [(element.slice(0, element.indexOf(':'))).trim()]:
        (element.slice(element.indexOf(':') + 1)).trim(),

      };

      resultObj = Object.assign(resultObj, objElement);
    }
  }

  return resultObj;
}

module.exports = convertToObject;
