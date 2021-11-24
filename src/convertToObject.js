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
  const sourceArr = sourceString.split(';');
  const obj = {};

  const arr = sourceArr.map(elem => elem.split(':').map(item => item.trim()));

  arr.forEach(([key, value]) => {
    if (key.length >= 1 && value.length >= 1) {
      obj[key] = value;
    }
  });

  return obj;
}

module.exports = convertToObject;
