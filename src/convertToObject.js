'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const h = {};

  sourceString
    .split(';')
    .map((property) => property.replaceAll(/[\n\t]/g, ''))
    .map((property) => property.trim())
    .filter((property) => property.length > 0)
    .map((property) => property.replaceAll(':', ''))
    .map((property) => property.split(' '))
    .forEach((style) => {
      const value = style.slice(1).join(' ').trim().replaceAll(',', ',\n');

      h[style[0]] = value;
    });

  return h;
}

module.exports = convertToObject;
