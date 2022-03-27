'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const elArr = sourceString.split(';');

  for (let i = 0; i < elArr.length; i++) {
    const mas = elArr[i].split(':');

    if (mas.length === 2) {
      result[mas[0].trim()] = mas[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
