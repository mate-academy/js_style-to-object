'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayCount = sourceString.split(';').map(x => x.split(':'));

  const finish = {};

  arrayCount.forEach(a => {
    if (a.length === 2) {
      finish[a[0].trim()] = a[1].trim();
    }
  });

  return finish;
}

module.exports = convertToObject;
