'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
/* eslint-disable no-console */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .reduce((acc, style) => {
      const [key, value] = style.split(':').map(part => part.trim());

      if (!key || !value) {
        return acc;
      }

      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
