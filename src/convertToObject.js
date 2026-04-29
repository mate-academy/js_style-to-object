'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const sourceStringSplitted = sourceString
    .split(';')
    .map((item) => item.trim())
    .map((item) => item.split(':').map((part) => part.trim()));

  return sourceStringSplitted.reduce((accumulator, [key, value]) => {
    accumulator[key] = value;

    return accumulator;
  }, {});
}

module.exports = convertToObject;
