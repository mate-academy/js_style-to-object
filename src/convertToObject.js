'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const mapRules = {};

  sourceString
    .split(';')
    .forEach(rule => {
      const splitedRule = rule.trim().split(':');

      if (splitedRule.length > 1) {
        mapRules[splitedRule[0].trim()] = splitedRule[1].trim();
      }
    });

  return mapRules;
}

module.exports = convertToObject;
