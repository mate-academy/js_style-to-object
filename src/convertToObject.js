'use strict';

// const { valueOf } = require("./stylesString");

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
  const arr = sourceString.split(';')
    .map(item => item.split(':').map(prop => prop.trim()));

  const obj = {};

  for (const key of arr) {
    if (key.length > 1) {
      obj[key[0]] = key[1];
    }
  }

  return obj;
}

module.exports = convertToObject;
