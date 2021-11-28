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
  const result = {};

  sourceString.split('\n')
    .filter(item => item.length > 1 && item.includes(':')
      && item.substr(-1) === ';')
    .forEach(item => {
      const newArr = item.split(':');

      result[newArr[0].trim()] = newArr[1].replace(';', '').trim();
    });

  return result;
}

module.exports = convertToObject;
