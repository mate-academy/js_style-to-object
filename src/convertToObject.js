'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const splitedString = sourceString.split(';');

  splitedString.forEach(rule => {
    const splitedRule = rule.split(':');

    if (splitedRule.length > 1) {
      const property = splitedRule[0].trim();
      const value = splitedRule[1].trim();

      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
