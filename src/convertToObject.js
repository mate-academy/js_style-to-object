'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = {};
  const splitBySemicolon = sourceString.split('\n').join('').trim().split(';');

  splitBySemicolon.forEach((item, index) => {
    const splitByColon = item.split(':');

    if (splitByColon.length === 2) {
      const key = splitByColon[0].trim();
      const value = splitByColon[1].trim();

      cssStyles[key] = value;
    }
  });

  return cssStyles;
}

module.exports = convertToObject;
