'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const SEMICOLON = ';';
  const COLON = ':';

  return sourceString
    .split(SEMICOLON)
    .reduce((acc, cssStyle) => {
      const [key, value] = cssStyle
        .split(COLON)
        .map(part => part.trim());

      if (key) {
        acc[key] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
