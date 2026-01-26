'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString
    .split(';')
    .map((item) => item.replace(/\s*:\s*/g, ': ').trim())
    .reduce((acc, style) => {
      const [key, value] = style.split(':');

      if (key && value) {
        acc[key.trim()] = value.trim();
      }

      return acc;
    }, {});

  return result;
}

module.exports = convertToObject;
