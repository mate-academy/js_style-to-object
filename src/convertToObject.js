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
  const propertyDataObject = {};

  const transformedArray = sourceString.split(';')
    .map(element => element.trim().split(':')
      .map(item => item.trim()));

  const filteredArray = transformedArray.filter(element => {
    return element.every(item => item.length);
  });

  filteredArray.forEach(element => {
    propertyDataObject[element[0]] = element[1];
  });

  return propertyDataObject;
}

module.exports = convertToObject;
