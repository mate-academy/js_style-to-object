'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  sourceString
    .split(';')
    .map((strings) => strings.trim())
    .forEach((strings) => {
      const [key, value] = strings.split(':');

      if (key && value !== undefined) {
        styles[key.trim()] = value.trim();
      }
    });

  return styles;
}

module.exports = convertToObject;
