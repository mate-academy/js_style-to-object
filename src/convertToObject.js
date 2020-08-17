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
  const object = {};
  const arr = sourceString.replace(/\s+/g, ' ').split(';');

  for (let string of arr) {
    string = string.trim();

    if (!string) {
      arr.slice(0, 1);
      continue;
    }

    const value = string.split(':');

    object[value[0].trim()] = value[1].trim();
  }

  return object;
}

module.exports = convertToObject;
