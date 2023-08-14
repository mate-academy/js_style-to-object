'use strict';

/**
 * Implement convertToObject function:
 *

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const formatedStyle = {};
  const removedEmptySpaces = sourceString
    .split(';\n')
    .filter((string) => string.includes(':'));

  removedEmptySpaces.forEach((style) => {
    const keyAndValue = style.split(':');
    const key = keyAndValue[0].trim();
    const clearedStyle = keyAndValue[1]
      .trim()
      .split(' ')
      .map(prop => prop.trim());

    formatedStyle[key] = clearedStyle.join(' ');
  });

  return formatedStyle;
}

module.exports = convertToObject;
