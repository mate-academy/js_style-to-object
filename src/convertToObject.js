'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';')
    .map(item => item.trim())
    .filter(item => !!item)
    .forEach(item => {
      const [key, value] = item.split(':');
      result[key] = value.trim();
    });

  return result;
}

module.exports = convertToObject;
