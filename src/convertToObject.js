'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styleRules = sourceString.split(';');
  const styleObject = {};

  styleRules.forEach(rule => {
    const [property, value] = rule.split(':').map(item => item.trim());

    if (property && value) {
      styleObject[property] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
