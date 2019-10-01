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
  arr.pop();
  let arr2 = [];
  const obj = {};
  const callback = (item) => {
    arr2 = item.trim().split(':');
    obj[arr2[0]] = arr2[1].trim();
  };
  arr.forEach(callback);
  return obj;
}

module.exports = convertToObject;
