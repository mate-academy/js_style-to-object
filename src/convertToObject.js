'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cascadeStyleSheet = {};
  const arrayFmString = sourceString.replace(/\n/g, '').split(';');

  for (let i = 0; i < arrayFmString.length; i++) {
    if (arrayFmString[i] !== '') {
      const propArray = arrayFmString[i].split(':');

      if (propArray.length > 1) {
        cascadeStyleSheet[propArray[0].trim()] = propArray[1].trim();
      }
    }
  }

  return cascadeStyleSheet;
}

module.exports = convertToObject;
