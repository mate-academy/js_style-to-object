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
  const propertiesAndValuesArray = sourceString.split(';');

  for (let i = 0; i < propertiesAndValuesArray.length; i++) {
    propertiesAndValuesArray[i] = propertiesAndValuesArray[i].trim();
  }

  const filteredPropAndVal = propertiesAndValuesArray.filter(
    item => item !== ''
  );

  for (let i = 0; i < filteredPropAndVal.length; i++) {
    filteredPropAndVal[i] = filteredPropAndVal[i].split(':');
  }

  const propertiesAndValuesObject = {};

  for (let i = 0; i < filteredPropAndVal.length; i++) {
    propertiesAndValuesObject[filteredPropAndVal[i][0].trim()]
    = filteredPropAndVal[i][1].trim();
  }

  return propertiesAndValuesObject;
}

module.exports = convertToObject;
