/* eslint-disable no-console */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((item) => item.trim())
    .filter(Boolean)
    .reduce((styledObj, rule) => {
      const [key, value] = rule.split(':');

      return {
        ...styledObj,
        [key.trim()]: value.trim(),
      };
    }, {});
}

module.exports = convertToObject;
