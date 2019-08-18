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
  const objectFromString = {};
  const splitString = sourceString.trim().split(';');

  for (let i = 0; i < splitString.length; i++) {
    splitString[i] = splitString[i].trim().split(': ');
    objectFromString[splitString[i][0]] = splitString[i][1];
  };

  return objectFromString;
}

module.exports = convertToObject;
