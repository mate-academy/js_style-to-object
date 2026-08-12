'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style)
    .forEach((style) => {
      const [key, ...value] = style.split(':');

      result[key.trim()] = value.join(':').trim();
    });

  return result;
}

module.exports = convertToObject;
