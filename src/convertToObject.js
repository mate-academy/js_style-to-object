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
  const stringToObject = {};

  const properties = sourceString
    .split(';')
    .map(elem => elem.trim())
    .filter(elem => elem !== '');

  const propertiesWithoutSpaces = properties
    .map(elem => elem.split(':').map(item => item.trim()));

  for (let i = 0; i < propertiesWithoutSpaces.length; i++) {
    stringToObject[propertiesWithoutSpaces[i][0]]
    = propertiesWithoutSpaces[i][1];
  }

  return stringToObject;
}

module.exports = convertToObject;
