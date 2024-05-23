'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split(';');
  const cssStyles = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) {
      continue;
    }

    const lineSplitted = line.split(':');
    const [cssProperty, cssValue] = lineSplitted.map((el) => el.trim());

    if (cssProperty && cssValue) {
      cssStyles[cssProperty] = cssValue;
    }
  }

  return cssStyles;
}

module.exports = convertToObject;
