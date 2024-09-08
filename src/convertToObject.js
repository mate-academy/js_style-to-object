'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .trim()
    .split(';')
    .reduce((properties, item) => {
      const [key, value] = item.split(':').map((str) => str.trim());

      properties[key] = value;

      return properties;
    }, {});
}

module.exports = convertToObject;
