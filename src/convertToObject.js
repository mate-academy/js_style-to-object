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

  const object = sourceArray.reduce(function(accumulator, current, index) {
    if (current.includes(':')) {
      const propertyArr = current.split(':');
      const property = propertyArr[0].trim();
      const value = propertyArr[1].trim();

      accumulator[property] = value;
    }

    return accumulator;
  }, {});

  return object;
}

module.exports = convertToObject;
