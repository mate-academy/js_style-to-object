'use strict';

const stylesString = require('./stylesString');

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
  const styles = {};

  const rules = stylesString.split(';\n');
  const separateRules = rules.map(rule => rule.split(':'));
  const rulesWithoutBlanklines = separateRules.filter(rule => (
    rule.length === 2
  ));

  rulesWithoutBlanklines.forEach(([rule, value]) => (
    styles[rule.trim()] = value.trim()
  ));

  return styles;
}

module.exports = convertToObject;
