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
  const splitedString = sourceString.trim().split(';');

  const notFarmatedProperties = [];

  splitedString.forEach(property =>
    notFarmatedProperties.push(property.trim()));

  const convertedString = {};

  notFarmatedProperties.map(property => {
    if (property !== '') {
      const key = (property.slice(0, property.indexOf(':'))).trimEnd();
      const value = (property.slice(property.indexOf(':') + 1)).trimStart();

      convertedString[key] = value;
    }
  });

  return convertedString;
}

module.exports = convertToObject;
