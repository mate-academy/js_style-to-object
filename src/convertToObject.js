'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * n [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssRules = {};

  sourceString.split(';').map(item => item.trim()).forEach(item => {
    if (item.length > 1) {
      const rule = item.split(':').map(val => val.trim());

      cssRules[rule[0]] = rule[1];
    }
  });

  return cssRules;
}

module.exports = convertToObject;
