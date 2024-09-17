'use strict';

/**
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
