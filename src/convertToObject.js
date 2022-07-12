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
  const cssProperties = {};

  sourceString
    .split(';')
    .map(el => el.trim())
    .filter(el => el.includes(':'))
    .map(el => el.split(':'))
    .map(el => {
      const arr = [];

      arr.push(el[0].trim());
      arr.push(el[1].trim());

      return arr;
    })
    .forEach(el => {
      cssProperties[el[0]] = el[1];
    });

  return cssProperties;
}

module.exports = convertToObject;
