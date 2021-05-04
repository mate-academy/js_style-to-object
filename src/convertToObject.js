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
  const propertiesArr = sourceString.split(';');
  const result = {};

  propertiesArr.forEach((element) => {
    if (element.trim() !== '') {
      const property = element.split(':');

      result[property[0].trim()] = property[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
