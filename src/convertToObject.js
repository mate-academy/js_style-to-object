'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 *
 *
 */

const SEMICOLON = ';';
const COLON = ':';

function convertToObject(sourceString) {
  return sourceString
    .split(SEMICOLON)
    .reduce((acc, item) => {
      const [key, value] = item.split(COLON);

      if (key.trim() !== '') {
        return {
          ...acc,
          [key.trim()]: value.trim(),
        };
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
