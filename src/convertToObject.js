'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((item) => item.trim())
    .filter(Boolean)
    .reduce((acc, curr) => {
      const [key, ...valueParts] = curr.split(':');
      const property = key.trim();
      const value = valueParts.join(':').trim();

      acc[property] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
