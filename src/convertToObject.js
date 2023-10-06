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
  const styleObject = {};
  const rules = sourceString.split(';');

  rules.forEach(rule => {
    const pair = rule.split(':').map(item => item.trim());

    if (pair.length < 2) {
      return;
    }

    const [key, value] = pair;

    styleObject[key] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
