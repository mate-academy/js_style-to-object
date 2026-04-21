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
    .reduce((obj, rule) => {
      const [key, value] = rule.split(':');

      obj[key.trim()] = value.trim();

      return obj;
    }, {});
}

module.exports = convertToObject;
