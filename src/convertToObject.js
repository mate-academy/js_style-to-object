'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split('\n') // splitting the lines to an array format
    .filter(el => el.length)
    .reduce((compilation, current) => {
      const [key, value] = current
        .substring(0, current.length - 1)
        .split(':')
        .map(side => side.trim());
      // cleaned data stored in key and value variables

      if (value) { // if data was found on this line
        compilation[key] = value;
      }

      return compilation;
    }, {});
}

module.exports = convertToObject;
