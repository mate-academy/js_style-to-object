'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split(';');

  const validLines = lines.filter((line) => line.includes(':'));

  const result = {};

  validLines.map((line) => {
    const [key, ...valueParts] = line.split(':');
    const value = valueParts.join(':').trim().replace(';', '').trim();

    result[key.trim().replace(/\n/g, '')] = value;
  });

  return result;
}

module.exports = convertToObject;
