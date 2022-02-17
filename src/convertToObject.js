'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssRule = sourceString.split(';').map(element => element.split(':'))
    .filter(empty => empty.length > 1).reduce(
      (resultCssObj, [keys, value]) => {
        resultCssObj[keys.trim()] = value.trim();

        return resultCssObj;
      }, {});

  return cssRule;
}

module.exports = convertToObject;
