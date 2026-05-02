'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const lines = sourceString.split(';').filter((line) => line.trim() !== '');

  const result = lines.reduce((obj, line) => {
    const parts = line.split(':');
    const key = parts[0].trim();
    const value = parts.slice(1).join(':').trim();

    obj[key] = value;

    return obj;
  }, {});

  return result;
}

module.exports = convertToObject;
