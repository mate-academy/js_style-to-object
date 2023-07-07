'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const properties = sourceString
    .split(';')
    .map((elem) => elem.trim())
    .filter((elem) => elem.length > 0)
    .map((elem) => elem.split(':'))
    .map((elem) => elem.map((n) => n.trim()));

  const transformToCss = (item) => (styleObject[item[0]] = item[1]);

  properties.forEach(transformToCss);

  return styleObject;
}

module.exports = convertToObject;
