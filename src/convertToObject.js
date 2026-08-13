'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleLines = sourceString.split(';').filter((x) => x !== '\n');

  return styleLines.reduce((styles, styleLine) => {
    const trimedLine = styleLine.trim();

    if (!trimedLine) {
      return styles;
    }

    const [key, value] = trimedLine.split(':');

    styles[key.trim()] = value.trim();

    return styles;
  }, {});
}

module.exports = convertToObject;
