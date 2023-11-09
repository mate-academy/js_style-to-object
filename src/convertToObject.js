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
  const objectWithCssParams = {};

  sourceString
    .split(/\n/)
    .filter((param) => {
      const trimmedParam = param.trim();

      return !(trimmedParam.length <= 1);
    })
    .map((param) => {
      return param.split(':').map((value) => {
        const fixedValue = value.includes(';')
          ? value.slice(0, value.indexOf(';'))
          : value;

        return fixedValue.trim();
      });
    })
    .reduce((accumulator, param) => {
      accumulator[param[0]] = param[1];

      return accumulator;
    }, objectWithCssParams);

  return objectWithCssParams;
}

module.exports = convertToObject;
