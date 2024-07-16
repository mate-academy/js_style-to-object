'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .map((entry) => entry.trim())
    .filter((entry) => entry)
    .reduce((cssProperties, entry) => {
      const [key, value] = entry
        .split(':')
        .map((spltEntry) => spltEntry.trim());

      cssProperties[key] = value;

      return cssProperties;
    }, {});
}

module.exports = convertToObject;
