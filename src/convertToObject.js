'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // write your code here
  const objectOfStyles = {};
  const styles = sourceString.split(';');

  const normalizedStyles = styles
    .map((style) => style.trim())
    .filter((style) => style !== '');

  const normalizedStyle = normalizedStyles.map((style) => style.split(':'));

  normalizedStyle.forEach((style) => {
    if (style[0].length >= 2 && style[1].length >= 2) {
      objectOfStyles[style[0].trim()] = style[1].trim();
    }
  });

  return objectOfStyles;
}

module.exports = convertToObject;
