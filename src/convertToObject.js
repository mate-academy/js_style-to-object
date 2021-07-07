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
  const result = {};
  const newArray = sourceString.split(';');

  newArray.forEach(value => {
    const property = value.split(':');

    if (property[1]) {
      result[property[0].trim()] = property[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
