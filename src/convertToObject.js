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
  const result = {};

  const arr = sourceString
    .split(' ')
    .filter(x => x !== '')
    .join(' ')
    .split('\n')
    .filter(x => x !== '')
    .join(' ')
    .split(';')
    .filter(x => x !== '' && x !== '  ')
    .join(':')
    .split(':')
    .map(x => x.trim());

  let i = 0;

  while (i < arr.length) {
    result[arr[i]] = arr[i + 1];
    i += 2;
  }

  return result;
}

module.exports = convertToObject;
