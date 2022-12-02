'use strict';

/**
 * Implement convertToObject function:
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const cleanedUpString = sourceString.split('\n').join('').trim().split(';');

  const seperatedIntoArrays = cleanedUpString.map(el => el.split(':'));

  const result = {};

  seperatedIntoArrays.map(element => {
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
