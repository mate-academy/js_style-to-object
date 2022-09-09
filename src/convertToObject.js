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
  const styleArray = sourceString.split(';').map(el => el.split(':'));

  const newObject = styleArray
    .filter(el => el.length > 1)
    .map(y => y.map(word => word.trim()))
    .reduce((a, x) => {
      a[x[0]] = x[1];

      return a;
    }, {});

  return newObject;
}

module.exports = convertToObject;
