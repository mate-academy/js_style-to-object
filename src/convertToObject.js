'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const stylesArray = stylesString.split(';');

  const stylesObject = {};

  for (const style of stylesArray) {
    const trimmedStyle = style.trim();

    if (trimmedStyle === '') {
      continue;
    }

    const [property, value] = trimmedStyle
      .split(':')
      .map((part) => part.trim());

    stylesObject[property] = value;
  }

  return stylesObject;
}

module.exports = convertToObject;
