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
  let arr = sourceString.split(';');
  const result = {};

  arr = arr.map(i => i.split(':').map(j => j.trim())).filter(i => i.length > 1);

  for (const a of arr) {
    result[a[0]] = a[1];
  }

  return result;
}

module.exports = convertToObject;
