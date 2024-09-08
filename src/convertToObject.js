'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((entry) => entry.trim())
    .filter((entry) => entry)
    .reduce((cssProperties, entry) => {
      const [key, value] = entry.split(':').map((str) => str.trim());

      if (key && value) {
        cssProperties[key] = value;
      }

      return cssProperties;
    }, {});
}

module.exports = convertToObject;
