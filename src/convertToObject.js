'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let strArray = sourceString.split(';');

  for (let i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].trim();

    if (strArray[i] === '') {
      strArray.splice(i, 1);
      i--;
    }
  }

  const str = strArray.join(':');

  strArray = str.split(':');

  strArray = strArray.map(el => el.trim());

  const obj = {};

  for (let i = 0; i < strArray.length; i + 2) {
    obj[strArray[i]] = strArray[i + 1];
  }

  return obj;
}

module.exports = convertToObject;
