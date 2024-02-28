'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArr = sourceString.split(';');
  const result = {};

  sourceArr.forEach(item => {
    const newProperty = item.split(':');

    if (newProperty.length === 2) {
      const key = newProperty[0].trim();
      const value = newProperty[1].trim();

      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
