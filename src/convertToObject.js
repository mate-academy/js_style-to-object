'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

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
