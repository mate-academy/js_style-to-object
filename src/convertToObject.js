'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  let resultObj = {};
  const stringArray = sourceString.replace(/\n/g, '').split(';');

  const result = stringArray
    .map(string => {
      const [property, value] = string.split(':');

      if (property.trim() !== '') {
        return {
          [property.trim()]: value.trim(),
        };
      }
    })
    .filter(item => item !== undefined);

  resultObj = Object.assign(resultObj, ...result);

  return resultObj;
}

module.exports = convertToObject;
