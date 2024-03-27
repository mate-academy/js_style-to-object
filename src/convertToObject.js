'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((line) => line.split(':').map((part) => part.trim()))
    .reduce(
      (sourceObject, [key, value]) => ({ ...sourceObject, [key]: value }),
      {},
    );
}

module.exports = convertToObject;
