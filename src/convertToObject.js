'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  return sourceString.split(';').reduce(addStyle, {});
}

function addStyle(styles, string) {
  if (!string.includes(':')) {
    return styles;
  }

  const style = string.split(':').map((item) => item.trim());

  styles[style[0]] = style[1];

  return styles;
}

module.exports = convertToObject;
