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
  let convertedObject = {};
  let splitedString = sourceString.split(';');

  splitedString.forEach(element => {
    element = element.split(':');

    if (element.length === 2) {
      const key = element[0].trim();
      const value = element[1].trim();
      convertedObject[key] = value;
    }
  });

  return convertedObject;
}

module.exports = convertToObject;
