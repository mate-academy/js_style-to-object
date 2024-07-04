'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylesLines = sourceString.split(';').map((item) => item.trim());

  const cssObject = stylesLines.reduce((acc, line) => {
    const [keys, values] = line.split(':');

    if (keys && values) {
      acc[keys.trim()] = values.trim();
    }

    return acc;
  }, {});

  return cssObject;
}

module.exports = convertToObject;
