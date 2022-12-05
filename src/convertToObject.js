'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
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
