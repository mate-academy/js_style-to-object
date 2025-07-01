'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayStylesWithoutSemicolones = sourceString
    .replaceAll(';', ':')
    .split(':');
  const arrayTrim = arrayStylesWithoutSemicolones.map((x) => x.trim());
  const arrayFilter = arrayTrim.filter((x) => x !== '');
  const arrayKeys = arrayFilter.filter((x, i) => i % 2 === 0);
  const arrayValues = arrayFilter.filter((x, i) => i % 2 !== 0);

  return createObject(arrayKeys, arrayValues);
}

function createObject(keys, values) {
  const result = {};

  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  }

  return result;
}

module.exports = convertToObject;
