'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const allString = sourceString
    .replace(/\t/g, ' ')
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line !== '');

  const pairs = allString.map((line) => {
    const colonIndex = line.indexOf(':');
    const key = line.slice(0, colonIndex).trim();
    const value = line
      .slice(colonIndex + 1)
      .trim()
      .replace(';', '');

    return [key, value];
  });
  const result = pairs.reduce((obj, pair) => {
    obj[pair[0]] = pair[1];

    return obj;
  }, {});

  return result;
}

module.exports = convertToObject;
