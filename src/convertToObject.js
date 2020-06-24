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
  const arr = sourceString
    .split(/\s*[;:]\s*/)
    .map((s) => s.trim())
    .filter(Boolean);

  const entries = [];

  while (arr.length > 0) {
    entries.push(arr.splice(0, 2));
  }

  return Object.fromEntries(entries);
}

module.exports = convertToObject;
