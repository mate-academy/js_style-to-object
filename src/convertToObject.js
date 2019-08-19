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
  const objectResult = {};
  const inputData = sourceString.split(';');
  for (let i = 0; i < inputData.length; i += 1) {
    inputData[i] = inputData[i].split(':');
    for (let j = 0; j < inputData[i].length; j += 1) {
      inputData[i][j] = inputData[i][j].trim();
    }
  }
  inputData.pop();

  for (let i = 0; i < inputData.length; i += 1) {
    objectResult[inputData[i][0]] = inputData[i][1];
  }

  return objectResult;
}

module.exports = convertToObject;
