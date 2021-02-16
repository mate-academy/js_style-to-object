'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rules = sourceString.split(';').map(rule => rule.trimLeft().split(':')
    .map(el => el.trim()));
  const styleSheet = {};

  for (const key of rules) {
    if (key.length > 1) {
      styleSheet[key[0]] = key[1];
    }
  }

  return styleSheet;
}

module.exports = convertToObject;
