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
  const obj = {};
  const arr = sourceString.split('\n');

  const newArr = arr.map(el => el.split(':'));

  for (const el of newArr) {
    if (el.length > 1) {
      obj[el[0].trim()] = el[1].slice(0, -1).trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
