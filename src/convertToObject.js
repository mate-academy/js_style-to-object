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
  const array = sourceString.split(';');

  return array.reduce((object, currentValue) => {
    const currentArray = currentValue.split(':');

    if (currentArray[0] && currentArray[1]) {
      object[currentArray[0].trim()] = currentArray[1].trim();
    };

    return object;
  }, {});
}

module.exports = convertToObject;
