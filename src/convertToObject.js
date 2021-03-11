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
  const arr = sourceString.split(';').filter(x => x.length > 1 && x !== ' ');

  for (const el of arr) {
    const pair = el.split(':');

    if (pair[1] !== undefined) {
      pair[0] = pair[0].trim();
      pair[1] = pair[1].trim();
      result[pair[0]] = pair[1];
    }
  }

  return result;
};

module.exports = convertToObject;
