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
  const resultObject = sourceString.split(';')
    .map(x => x.split(':').map(y => y.trim()))
    .reduce((a, x) => {
      a[x[0]] = x[1];

      return a;
    }, {});

  for (const item in resultObject) {
    if (!item.length) {
      delete resultObject[item];
    }
  }

  return resultObject;
}

module.exports = convertToObject;
