'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const source = sourceString
    .split(';')
    .map((item) => item.replace('\n', '').trim())
    .filter((item) => item.includes(':'));

  const sourceFinal = source.reduce((acc, word) => {
    const parts = word.split(':');
    const key = parts[0].trim();
    const value = parts[1].trim();

    acc[key] = value;

    return acc;
  }, {});

  return sourceFinal;
}

module.exports = convertToObject;
