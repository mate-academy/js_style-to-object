'use strict';

// const stylesString = require('./stylesString');

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObj = {};
  const properties = sourceString.split('\n').filter((str) => str.length > 3);

  properties.forEach((str) => {
    const property = str.split(':');
    const key = property[0].trim();
    const value = property[1].slice(0, -1).trim();

    stylesObj[key] = value;
  });

  return stylesObj;
}

// console.log(convertToObject(stylesString));
module.exports = convertToObject;
