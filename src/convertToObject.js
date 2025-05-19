'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line)
    .reduce((acc, line) => {
      const [key, ...valueParts] = line.split(':');

      if (!key || valueParts.length === 0) {
        return acc;
      }

      const prop = key.trim();
      const value = valueParts.join(':').trim();

      acc[prop] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
