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
  const sourceArray = sourceString.split(';');
  const convertedToObject = {};

  for (let property of sourceArray) {
    property.trim();

    property = property.split(': ');

    if (!property[0] || !property[1]) {
      continue;
    }

    const key = property[0].split('').splice(1).join('').trim();
    const value = property[1].trim();

    convertedToObject[key] = value;
  }

  return convertedToObject;
}

module.exports = convertToObject;
