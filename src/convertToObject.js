'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const styleStrings = sourceString.split(';');

  styleStrings.forEach(property => {
    const keyAndValue = property.split(':');

    if (keyAndValue.length === 2) {
      const key = keyAndValue[0].trim();
      const value = keyAndValue[1].trim();

      styles[key] = value;
    }
  });

  return styles;
}

module.exports = convertToObject;
