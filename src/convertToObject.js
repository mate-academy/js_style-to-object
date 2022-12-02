'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter(property => property.includes(':'))
    .map(propValPair => propValPair.split(':'))
    .reduce((prev, curr) => {
      const cssProperty = curr[0].trim();
      const cssValue = curr[1].trim();

      return {
        ...prev,
        [cssProperty]: cssValue,
      };
    }, {});
};

module.exports = convertToObject;
