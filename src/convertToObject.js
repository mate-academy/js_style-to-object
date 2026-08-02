'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style)
    .reduce((result, style) => {
      const [property, ...value] = style.split(':');

      result[property.trim()] = value.join(':').trim();

      return result;
    }, {});
}

module.exports = convertToObject;
