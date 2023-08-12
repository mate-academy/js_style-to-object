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
  const properties = sourceString
    .split(';')
    .map(prop => prop.trim().split(':'))
    .filter(prop => prop[0] !== '');
  const styleList = properties.reduce((acc, prop) => {
    return Object.assign(acc, { [prop[0].trim()]: prop[1].trim() });
  }, {});

  return styleList;
}

module.exports = convertToObject;
