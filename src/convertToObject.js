'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const stringToObject = sourceString
    .split(';')
    .map((value) => {
      return value.split(':').map((spaces) => spaces.trim());
    })
    .reduce((acc, key) => {
      acc[key[0]] = key[1];

      return acc;
    }, {});

  return stringToObject;
}

module.exports = convertToObject;
