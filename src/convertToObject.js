'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((str) => str.trim())
    .filter(Boolean)
    .reduce((cssObject, cssRule) => {
      const [key, ...value] = cssRule.split(':');

      cssObject[key.trim()] = value.join(':').trim();

      return cssObject;
    }, {});
}

module.exports = convertToObject;
