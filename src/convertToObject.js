'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylesMap = {};

  const cssString = sourceString.trim().replace(/;$/, '');

  const rules = cssString.split(';').map((rule) => rule.trim());

  rules.forEach((rule) => {
    const [property, value] = rule.split(':').map((part) => part.trim());

    if (property && value) {
      stylesMap[property] = value;
    }
  });

  return stylesMap;
}

module.exports = convertToObject;
