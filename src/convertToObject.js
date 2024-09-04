'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
 const cleanedUpString = sourceString
    .split('\n')
    .join('')
    .trim()
    .split(';')
    .map(el => el.split(':'));

  const result = {};

  cleanedUpString.forEach(element => {
    if (element.length > 1) {
      const [cssProperty, cssValue] = element;

      const objectKey = cssProperty.trim();
      const objectValue = cssValue.trim();

      result[objectKey] = objectValue;
    }
  });

  return result;
}

module.exports = convertToObject;
