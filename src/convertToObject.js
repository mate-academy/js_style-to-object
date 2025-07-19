'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rooles = sourceString.split(';');
  const object = {};

  for (let rool of rooles) {
    rool = rool.trim();
    rool = rool.split(':');

    if (rool.length === 2 && rool[0] !== undefined && rool[1] !== undefined) {
      object[rool[0].trim()] = rool[1].trim();
    } else {
      continue;
    }
  }

  return object;
}

module.exports = convertToObject;
