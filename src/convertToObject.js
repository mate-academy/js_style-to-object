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
  const res = {};

  const hugeArr = sourceString.split(';');

  hugeArr.map((str) => {
    const pair = str.split(':');
    const [key, value] = pair;

    if (key !== undefined && value !== undefined) {
      res[key.trim()] = value.trim();
    }
  });

  return res;
}

module.exports = convertToObject;
