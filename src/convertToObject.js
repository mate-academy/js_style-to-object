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
  // write your code here

  const strings = sourceString.split(';').filter(x => x.length > 2)
    .reduce((prev, current) => {
      const splitString = current.trim();
      let splitted = [];

      if (splitString) {
        splitted = splitString.split(':').map(x => x.trim());

        prev[splitted[0].toString()] = splitted[1];
      }

      return prev;
    }, {});

  return strings;
}

module.exports = convertToObject;
