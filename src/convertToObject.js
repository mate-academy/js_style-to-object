'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const rules = sourceString.split(';')
    .map(selector => selector.split(':').map(elem => elem.trim()));

  for (let i = 0; i < rules.length; i++) {
    if (rules[i].length > 1) {
      result[rules[i][0]] = rules[i][1];
    }
  }

  return result;
}

module.exports = convertToObject;
