'use strict';

/**
 * Implement convertToObject function:
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArray = sourceString.trim().split(';');
  const styleObj = {};

  for (let i = 0; i < styleArray.length; i++) {
    const stylePair = styleArray[i].split(':');

    if (stylePair.length === 2) {
      const styleKey = stylePair[0].trim();
      const styleValue = stylePair[1].trim();

      styleObj[styleKey] = styleValue;
    }
  }

  return styleObj;
}

module.exports = convertToObject;
