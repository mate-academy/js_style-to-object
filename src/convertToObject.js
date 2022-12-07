'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedStyles = sourceString
    .split(';')
    .map(item => item.trim())
    .filter(item => item !== '')
    .map(item => item.split(':'))
    .reduce((prev, curr) => ({
      ...prev,
      [curr[0].trim()]: curr[1].trim(),
    }), {});

  return convertedStyles;
}

module.exports = convertToObject;
