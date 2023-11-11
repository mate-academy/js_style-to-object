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
    .split(/\n/)
    .filter((param) => {
      const trimmedParam = param.trim();

      return !(trimmedParam.length <= 1);
    })
    .reduce((accumulator, stringParam) => {
      const [key, value] = stringParam.split(':').map((param) => {
        const fixedValue = param.includes(';')
          ? param.slice(0, param.indexOf(';'))
          : param;

        return fixedValue.trim();
      });

      accumulator[key] = value;

      return accumulator;
    }, {});

  return objectWithCssParams;
}

module.exports = convertToObject;
