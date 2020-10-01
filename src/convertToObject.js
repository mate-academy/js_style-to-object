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
  const result = {};

  const rules = sourceString.split(';');

  rules.forEach(rule => {
    const keyAndValue = rule.split(':');

    let key = keyAndValue[0];
    let value = keyAndValue[1];

    if (key && value) {
      key = key.trim();
      value = value.trim();
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
