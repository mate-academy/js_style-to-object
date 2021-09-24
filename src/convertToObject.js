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
  const result = sourceString.split(';');

  function callback(prev, item) {
    const arr = item.split(':');

    if (arr[1]) {
      prev[arr[0].trim()] = arr[1].trim();
    }

    return prev;
  }

  return result.reduce(callback, {});
}

module.exports = convertToObject;
