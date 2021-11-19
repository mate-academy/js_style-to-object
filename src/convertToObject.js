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
  const strArr = sourceString.trim().replace(/\s+/g, ' ').split(';');

  strArr.forEach(string => {
    if (string !== ' ' && string) {
      const [property, value] = string.split(':');

      styles[property.trim()] = value.trim();
    }
  });

  return styles;
}

module.exports = convertToObject;
