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
  const newArr = sourceString.replace(/;/g, ':').replace(/\n/g, '').split(':');
  const newObj = {};

  for (let i; i < newArr.length - 1; i += 2) {
    const key = newArr[i].trim();
    const value = newArr[i + 1].trim();
    newObj[key] = value;
  }
  return newObj;
}

module.exports = convertToObject;
