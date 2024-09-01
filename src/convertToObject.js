'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = {};

  sourceString
    .trim()
    .split(';')
    .forEach((item) => {
      const [key, value] = item.split(':').map((str) => str.trim());

      if (key && value) {
        cssProperties[key] = value;
      }
    });

  return cssProperties;
}

module.exports = convertToObject;
