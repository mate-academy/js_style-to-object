'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  const arr = sourceString.split(';');

  arr.forEach(value => {
    const styles = value.split(':');

    if (styles[0] && styles[1]) {
      result[styles[0].trim()] = styles[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
