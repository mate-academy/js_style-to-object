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
  const obj = {};
  arr.forEach(function(elem) {
    const elemItem = elem.trim().split(':');
    obj[elemItem[0]] = elemItem[1].trim();
  });
  return obj;
}

module.exports = convertToObject;
