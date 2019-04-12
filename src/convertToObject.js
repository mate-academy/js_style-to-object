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
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    let splt = arr[ i ].split(':');
    let key = splt[0];
    let val = splt[1];
    if (key && val) {
      obj[key.trim()] = val.trim();
    }
  }
  return obj;
}

module.exports = convertToObject;
