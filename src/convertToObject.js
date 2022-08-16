'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = {};

  const redactedString = sourceString
    .split(';')
    .filter(s => s.trim().length > 0)
    .join(':')
    .split(':')
    .map(s => s.trim());

  for (let i = 0; i < redactedString.length; i += 2) {
    cssStyles[redactedString[i]] = redactedString[i + 1];
  }

  return cssStyles;
}

module.exports = convertToObject;
