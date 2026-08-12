'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesList = sourceString
    .split(';')
    .map((style) => {
      return style.trim();
    })
    .filter((style) => style !== '');

  const styles = {};

  stylesList.forEach((style) => {
    const colonIndex = style.indexOf(':');

    const key = style.slice(0, colonIndex).trim();
    const value = style.slice(colonIndex + 1).trim();

    styles[key] = value;
  });

  return styles;
}

module.exports = convertToObject;
