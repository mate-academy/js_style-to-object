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
  const res = {};

  sourceString.split(';\n').forEach(elem => {
    if (elem.trim()) {
      const splitted = elem.split(':');

      res[splitted[0].trim()] = splitted[1].trim();
    }
  });

  return res;
}

module.exports = convertToObject;
