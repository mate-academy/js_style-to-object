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
  const splitedStr = sourceString.split(';');
  const convertedObj = {};

  for (let i = 0; i < splitedStr.length; i++) {
    const arrElements = splitedStr[i].trim().split(': ');
    convertedObj[arrElements[0]] = arrElements[1];
  }

  return convertedObj;
}

module.exports = convertToObject;
