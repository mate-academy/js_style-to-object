'use strict';

/**
 * Implement convertToObject function:
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectOfStyles = {};

  sourceString
    .split(';')
    .map(el => {
      const key = el.split(':');

      if (key[1] !== undefined) {
        objectOfStyles[key[0].trim()] = key[1].trim();
      }

      return el;
    });

  return objectOfStyles;
}

module.exports = convertToObject;
