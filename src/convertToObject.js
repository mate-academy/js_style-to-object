'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceConverted = {};

  sourceString.split(';').forEach(rule => {
    const splitedRule = rule.trim().split(':');

    if (splitedRule[0]) {
      sourceConverted[splitedRule[0].trim()] = splitedRule[1].trim();
    }
  });

  return sourceConverted;
}

module.exports = convertToObject;
