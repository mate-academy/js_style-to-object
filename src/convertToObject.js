'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((str) => str.split(':').map((value) => value.trim()))
    .filter(([key, value]) => key && value)
    .reduce((object, [key, value]) => ({ ...object, [key]: value }), {});
}

module.exports = convertToObject;
