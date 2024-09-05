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
    .forEach((element) => {
      const [key, value] = element.split(':');

      if (value !== undefined) {
        cssProperties[key.trim()] = value.trim().replace(/\\n/g, '\n');
      }
    });

  return cssProperties;
}

module.exports = convertToObject;
