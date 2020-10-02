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
  const cssObject = {};

  const rules = sourceString.split(';');

  rules.forEach(rule => {
    let [key, value] = rule.split(':');

    if (key && value) {
      key = key.trim();
      value = value.trim();
      cssObject[key] = value;
    }
  });

  return cssObject;
}

module.exports = convertToObject;
