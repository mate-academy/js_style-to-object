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
  const array = sourceString.split(';');
  const resultConvert = {};
  let properties = [];
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].trim();
    properties = array[i].split(': ');
    resultConvert[properties[0]] = properties[1];
  }

  return resultConvert;
}

module.exports = convertToObject;
