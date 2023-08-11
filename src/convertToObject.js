'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const formatedString
  = sourceString
    .split(';')
    .map(style =>
      style
        .split(':')
        .map(stylePart => stylePart.trim())
    )
    .filter(style =>
      style.length === 2);

  formatedString.forEach(([key, value]) => {
    styles[key] = value;
  });

  return styles;
}

module.exports = convertToObject;
