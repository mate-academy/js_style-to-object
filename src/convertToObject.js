'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((declaration ) => declaration .trim())
    .filter(Boolean)
    .reduce((styleObject , declaration ) => {
      const colonIndex = declaration .indexOf(':');

      if (colonIndex === -1) {
        return styleObject ;
      }

      const key = declaration .slice(0, colonIndex).trim();
      const value = declaration .slice(colonIndex + 1).trim();

      styleObject [key] = value;

      return styleObject ;
    }, {});
}

module.exports = convertToObject;
