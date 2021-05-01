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
  const obj = {};
  const strArr = sourceString.split(':').join(';').split(';')
    .map(item => item.trim());

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== '') {
      obj[strArr[i]] = strArr[i + 1];
      i++;
    }
  }

  return obj;
}

module.exports = convertToObject;
