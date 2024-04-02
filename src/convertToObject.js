'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const workString = sourceString
    .split(';')
    .map((x) => x.trim())
    .filter((x) => x !== '');

  const result = {};

  for (const x of workString) {
    const key = x.split(':')[0].trim();
    const value = x.split(':')[1].trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
