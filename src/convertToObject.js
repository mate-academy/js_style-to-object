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
  const rules = sourceString.split(';');
  const style = {};

  rules.map(rule => {
    const pair = rule.trim().split(':');

    if (pair.length > 1) {
      const key = pair[0].trim();
      const property = pair[1].trim();

      style[key] = property;
    }
  });

  return style;
}

module.exports = convertToObject;
