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
  // write your code here

  const newList = sourceString.split(';')
    .map(item => item.split(':').map(element => element.trim()));

  const objList = {};

  for (const element of newList) {
    if (element.length > 1) {
      objList[element[0]] = element[1];
    }
  }

  return objList;
}

module.exports = convertToObject;
