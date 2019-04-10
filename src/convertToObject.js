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
  const arrayOfStyles = sourceString.split(';');
  const objectOfStyles = {};
  arrayOfStyles.forEach(i => {
    const [key, value] = i.split(':');
    if (value !== undefined) {
      objectOfStyles[key.trim()] = value.trim();
    }
  });
  return objectOfStyles;
}

module.exports = convertToObject;
