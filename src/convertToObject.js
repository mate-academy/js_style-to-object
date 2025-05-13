'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split(';');
  const result = {};

  for (let line of lines) {
    line = line.trim();

    if (!line) {
      continue;
    }

    const [prop, val] = line.split(':');

    if (prop && val) {
      result[prop.trim()] = val.trim();
    }
  }

  return result;
}
module.exports = convertToObject;
