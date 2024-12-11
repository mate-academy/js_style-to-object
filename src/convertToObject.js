'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesList = sourceString
    .split(';')
    .map((styleString) => styleString.split(':').map((rule) => rule.trim()));

  const formattedStyles = {};

  for (const style of stylesList) {
    formattedStyles[style[0]] = style[1];
  }

  return formattedStyles;
}

module.exports = convertToObject;
