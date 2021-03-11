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
  const arrFromString = sourceString.split(';');
  const arrFromArr = [];
  const result = {};

  for (let i = 0; i < arrFromString.length; i++) {
    arrFromArr.push(arrFromString[i].split(':'));
  }

  for (let i = 0; i < arrFromArr.length; i++) {
    if (arrFromArr[i][1] !== undefined) {
      result[arrFromArr[i][0].trim()] = arrFromArr[i][1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
