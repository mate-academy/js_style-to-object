'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = sourceString.split(';').reduce((acc, style) => {
    const [key, value] = style.split(':').map((clear) => clear.trim());

    acc[key] = value;

    return acc;
  }, {});

  return cssStyles;
}

module.exports = convertToObject;
