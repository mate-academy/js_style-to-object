'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';') // split by <;>
    .reduce((rules, unparsedRule) => {
      // retrieve trimmed key and value
      const [key, value] = unparsedRule
        .split(':')
        .map(rule => rule.trim());

      // write rule if key and value exists
      if (key && value) {
        rules[key] = value;
      }

      return rules;
    }, {});
}

module.exports = convertToObject;
