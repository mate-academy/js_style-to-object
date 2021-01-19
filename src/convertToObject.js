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
  const arr = sourceString.split(';');
  const newArr = arr.map(item => item.split(':'));
  const obj = {};

  for (const elArr of newArr) {
    if (elArr[1]) {
      obj[elArr[0].trim()] = elArr[1].trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
