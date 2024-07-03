'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylesLines = sourceString.split(';').map((item) => item.trim());

  const cssObject = {};

  stylesLines.forEach((line) => {
    const divideIndex = line.indexOf(':');

    if (divideIndex !== -1) {
      const keys = line.slice(0, divideIndex).trim();
      const values = line.slice(divideIndex + 1).trim();

      if (keys && values) {
        cssObject[keys] = values;
      }
    }
  });

  return cssObject;
}

module.exports = convertToObject;
