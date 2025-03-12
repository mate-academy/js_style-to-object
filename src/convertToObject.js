'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((property) => property.trim())
    .filter((property) => property !== '')
    .reduce((prev, property) => {
      const [key, ...valueParts] = property.split(':');
      const value = valueParts.join(':').trim();

      prev[key.trim()] = value;

      return prev;
    }, {});
}

module.exports = convertToObject;
