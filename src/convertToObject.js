'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rules = sourceString.split('\n');
  const stylesObject = {};

  for (const rule of rules) {
    const currentRule = rule.split(':');

    if (currentRule.length !== 2) {
      continue;
    }

    const currentProperty = currentRule[0].trim();
    const currentValue = currentRule[1].slice(0, -1).trim();

    stylesObject[currentProperty] = currentValue;
  }

  return stylesObject;
}

module.exports = convertToObject;
