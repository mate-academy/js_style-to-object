'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString
    .split(';')
    .map(style => style.split(':'))
    .filter(style => style.length >= 2);

  return stylesArray.reduce((object, arrItem) => {
    const [key, value] = arrItem;

    object[key.trim()] = value.trim();

    return object;
  }, {});
}

module.exports = convertToObject;
