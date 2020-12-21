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
  // eslint-disable-next-line max-len
  const arr = sourceString.replace(/\s+|\n/g, ' ')
    .split(';').join(':').split(':')
    .filter(el => el.length > 1);
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i].trim()] = arr[++i].trim();
  }

  return obj;
}
module.exports = convertToObject;
