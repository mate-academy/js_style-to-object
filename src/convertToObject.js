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
  const result = sourceString
    .replace(/\n/g, '')
    .split(';')
    .map(item => item.split(':'))
    .filter(item => item.length > 1)
    .reduce((prev, item) => {
      const key = item[0].trim();
      const keyValue = item[1].trim();

      return {
        ...prev, [key]: keyValue,
      };
    }, {});

  return result;
}

module.exports = convertToObject;
