'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleLines = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return styleLines.reduce((prev, line) => {
    const [key, value] = line.split(':');

    prev[key.trim()] = value.trim();

    return prev;
  }, {});
}

module.exports = convertToObject;
