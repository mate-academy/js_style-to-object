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
  const newArr = sourceString.replace(/\r?\n/g, '').split(';');
  const arrKey = [];
  const arrValues = [];
  const newObj = {};

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i]) {
      arrKey[i] = newArr[i].split(':')[0].trim();
      arrValues[i] = newArr[i].split(':')[1].trim();
      newObj[arrKey[i]] = arrValues[i];
    }
  }
  return newObj;
}

module.exports = convertToObject;
