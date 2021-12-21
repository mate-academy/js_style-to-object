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
  const result = [];
  const obj = {};

  for (const item of sourceString.split(';')) {
    const split = item.split(':');
    const temp = [];

    for (const value of split) {
      temp.push(value.trim());
    }

    result.push(temp);
  }

  for (const item of result) {
    if (item.length > 1) {
      obj[item[0]] = item[1];
    }
  }

  return obj;
}

module.exports = convertToObject;
