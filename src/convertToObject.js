'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString.trim().split(';');
  const styleObject = {};

  for (const item of styleDeclarations) {
    if (item.trim().length > 0) {
      const resultItemSplit = item.split(':');
      const key = resultItemSplit[0].trim();
      const value = resultItemSplit[1].trim();

      styleObject[key] = value;
    }
  }

  return styleObject;
}

module.exports = convertToObject;
