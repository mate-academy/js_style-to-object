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
  const sourceObject = {};

  for (let i = 0; i < sourceArray.length; i++) {
    const valuesForObject = sourceArray[i].trim().split(': ');
    sourceObject[valuesForObject[0]] = valuesForObject[1];

    if (!sourceObject[valuesForObject[0]]) {
      delete sourceObject[valuesForObject[0]];
    }
  }

  return sourceObject;
}

module.exports = convertToObject;
