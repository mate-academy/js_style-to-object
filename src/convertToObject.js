'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedString = sourceString.split(';');

  return splittedString.reduce((prev, rule) => {
    const splitedRule = rule.split(':');
    const value = splitedRule[1];
    const key = splitedRule[0];

    if (value && key.length > 0) {
      prev[key.trim()] = value.trim();
    }

    return prev;
  }, {});
}

module.exports = convertToObject;
