'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitString = sourceString
    .split(';')
    .map((str) => str.trim())
    .filter(Boolean);

  const getArrays = splitString.map((arr) => {
    return arr.split(':').map((value) => value.trim());
  });

  const result = {};

  getArrays.forEach((params) => {
    const [key, value] = params;

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
