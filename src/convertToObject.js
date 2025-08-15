'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitsourceString = sourceString.trim().split(';');
  const cssProperties = {};

  splitsourceString.forEach((item) => {
    if (item.trim().length > 0) {
      const resultItemSplit = item.split(':');
      const key = resultItemSplit[0].trim();
      const value = resultItemSplit[1].trim();

      cssProperties[key] = value;
    }
  });

  return cssProperties;
}

module.exports = convertToObject;
