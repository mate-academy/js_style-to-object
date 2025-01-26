'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const Lines = sourceString.split(';');
  const result = {};

  Lines.forEach(function (line) {
    const [key, value] = line.split(':');

    if (key && value) {
      result[key.trim()] = value.trim();
    } else if (!key || !value) {
      result[key.trim()] = undefined;
    }
  });

  return result;
}

module.exports = convertToObject;
