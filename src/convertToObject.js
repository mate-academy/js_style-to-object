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
    .map((element) => element.trim())
    .filter((element) => element !== '')
    .forEach((element) => {
      const parts = element.split(':');
      const key = parts[0].trim();
      const value = parts[1].trim();

      styles[key] = value;
    });

  return styles;
}

module.exports = convertToObject;
