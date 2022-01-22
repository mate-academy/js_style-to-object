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
  const sourceArr = sourceString
    .split(';')
    .map((x) => x.trim())
    .filter((x) => x.length > 0);

  const obj = {};

  for (let i = 0; i < sourceArr.length; i++) {
    const elem = sourceArr[i]
      .split(':')
      .map((x) => x.trim());

    obj[elem[0]] = elem[1];
  }

  return obj;
}

module.exports = convertToObject;
