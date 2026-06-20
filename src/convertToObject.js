'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const arr = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.trim() !== '');
  const entries = arr.map((line) => {
    const [prop, value] = line.split(':');

    return [prop.trim(), value.trim()];
  });

  return Object.fromEntries(entries);
}

module.exports = convertToObject;
