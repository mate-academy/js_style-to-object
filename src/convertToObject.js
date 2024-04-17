'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.trim())
    .reduce((acc, rule) => {
      const [prop, value] = rule.split(':');

      acc[prop.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
