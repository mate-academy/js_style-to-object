'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parsedStyles = {};

  sourceString
    .split(';')
    .map((property) => property.replaceAll(/[\n\t]/g, ''))
    .map((property) => property.trim())
    .filter((property) => property.length > 0)
    .map((property) => property.replaceAll(':', ''))
    .map((property) => property.split(' '))
    .forEach((style) => {
      const value = style.slice(1).join(' ').trim().replaceAll(',', ',\n');

      parsedStyles[style[0]] = value;
    });

  return parsedStyles;
}

module.exports = convertToObject;
