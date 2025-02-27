'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styleObject = {};

  sourceString
    .split(';')
    .map((rule) => rule.trim())
    .forEach((rule) => {
      const [key, value] = rule.split(':');

      if (key && value) {
        styleObject[key.trim()] = value.trim();
      }
    });

  return styleObject;
}

module.exports = convertToObject;
