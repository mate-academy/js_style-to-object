'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceSplit = sourceString.split(';').map(item => item.split(':'));

  const newObject = {};

  sourceSplit.forEach(elem => {
    if (elem.length === 2) {
      const key = elem[0].trim();
      const value = elem[1].trim();

      newObject[key] = value;
    }
  });

  return newObject;
}

module.exports = convertToObject;
