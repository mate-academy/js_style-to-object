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
  const filteredArr = arr.filter(item => item.includes(':'));
  const readyArr = new Map(filteredArr
    .map(item => item.split(':').map(str => str.trim())));

  return Object.fromEntries(readyArr);
}

module.exports = convertToObject;
