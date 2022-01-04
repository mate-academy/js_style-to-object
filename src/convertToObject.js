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
  const keys = sourceString.split(';');
  const newObj = {};

  for (let i = 0; i < keys.length; i++) {
    const arr = keys[i].split(':');

    if (arr.length !== 2) {
      continue;
    }

    const key = `${arr[0].trim()}`;
    const value = `${arr[1].trim()}`;

    if (keys === '' || value === '') {
      continue;
    }

    newObj[key] = value;
  }

  return newObj;
};

module.exports = convertToObject;
