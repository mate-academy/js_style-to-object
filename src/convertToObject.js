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
  let newClearStr = sourceString.replace(/;/g, ':');
  newClearStr = newClearStr.replace(/\n/g, '').split(':');
  const newObj = {};
  for (let i = 0; i < newClearStr.length - 1; i += 2) {
    newObj[newClearStr[i].trim()] = newClearStr[i + 1].trim();
  }
  return newObj;
}

module.exports = convertToObject;
