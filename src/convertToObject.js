/* eslint-disable prettier/prettier */
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
    .filter((style) => style.trim().length > 0)
    .forEach((style) => {
      const index = style.indexOf(':');

      if (index === -1) {
        return;
      }

      const key = style.slice(0, index).trim();
      const value = style.slice(index + 1).trim();

      if (key && value) {
        styles[key] = value;
      }
    }, {});

  return styles;
}

module.exports = convertToObject;
