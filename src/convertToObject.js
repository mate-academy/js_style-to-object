'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const lines = sourceString.split('\n');

  for (let line of lines) {
    line = line.trim();
    if (!line || !line.includes(':')) continue;

    const [key, ...rest] = line.split(':');
    const value = rest.join(':').trim().replace(/;$/, '');

    result[key.trim()] = value;
  }

  return result;
}

module.exports = convertToObject;
