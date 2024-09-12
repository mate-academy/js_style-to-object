'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rules = sourceString.split(';');
  const style = {};

  rules.forEach(rule => {
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
