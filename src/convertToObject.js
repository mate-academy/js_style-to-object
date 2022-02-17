'use strict';

/**
 * Implement convertToObject function:
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = {};
  const stylesArray = sourceString.split(';')
    .map(row => row.split(':'))
    .filter(el => el.length > 1);

  for (const row of stylesArray) {
    cssStyles[row[0].trim()] = row[1].trim();
  };

  return cssStyles;
}

module.exports = convertToObject;
