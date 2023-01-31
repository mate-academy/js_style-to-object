'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';').map(style => style.split(':')
    .map(property => property.trim())).filter(el => !''.includes(el));

  const stylesObject = {};

  for (const item of stylesArray) {
    stylesObject[item[0]] = item[1];
  }

  return stylesObject;
}

module.exports = convertToObject;
