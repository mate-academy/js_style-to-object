'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resObj = {};
  const cleanedSourceString = sourceString.replace(/\t+/, ' ').trim();
  const styleStrings = cleanedSourceString.split(';');
  let currentProperty = '';
  let currentValue = '';

  styleStrings.forEach((styleString) => {
    if (styleString.trim() === '') {
      return;
    }

    if (styleString.includes(':')) {
      const index = styleString.indexOf(':');
      const property = styleString.slice(0, index).trim();
      const value = styleString.slice(index + 1).trim();

      if (currentProperty) {
        resObj[currentProperty] = currentValue.trim();
        currentProperty = '';
        currentValue = '';
      }

      currentProperty = property;
      currentValue = value;
    } else if (currentProperty) {
      currentValue += ' ' + styleString.trim();
    }
  });

  if (currentProperty) {
    resObj[currentProperty] = currentValue.trim();
  }

  return resObj;
}

module.exports = convertToObject;
