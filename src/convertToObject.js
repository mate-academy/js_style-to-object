'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = sourceString
    .split(';')
    .map(x => x.split(':').map(y => y.trim()))
    .reduce((a, x) => {
      a[x[0]] = x[1];

      return a;
    }, {});

  Object.keys(obj).forEach(key => {
    if (key === '') {
      delete obj[key];
    }
  });

  return obj;
}

module.exports = convertToObject;
