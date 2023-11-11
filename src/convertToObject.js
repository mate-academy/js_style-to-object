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
  const objectWithCssParams = sourceString
    .split(';')
    .reduce((accumulator, stringParam) => {
      const separatedParam = stringParam.split(':');

      if (separatedParam.length === 2) {
        const key = separatedParam[0].trim();
        const value = separatedParam[1].trim();

        accumulator[key] = value;
      }

      return accumulator;
    }, {});

  return objectWithCssParams;
}

module.exports = convertToObject;
