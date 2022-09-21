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
  const splitedRules = sourceString
    .split(';')
    .map(rule => rule.trim())
    .filter(rule => rule !== '');

  const rules = splitedRules.reduce((rulesAccumulator, rule) => {
    const [cssRule, cssValue] = rule.split(':');

    rulesAccumulator[cssRule.trim()] = cssValue.trim();

    return rulesAccumulator;
  }, {});

  return rules;
}

module.exports = convertToObject;
