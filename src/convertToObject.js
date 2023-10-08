'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const setOfRules = sourceString.replace(/\n|\t/g, '').split(';');
  const res = {};

  setOfRules.forEach((rule) => {
    if (rule.trim() !== '') {
      const ruleParts = rule.split(':');

      res[ruleParts[0].trim()] = ruleParts[1].trim();
    }
  });

  return res;
}

module.exports = convertToObject;
