'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const separateStyles = sourceString
    .split(';')
    .filter((style) => style.trim().length !== 0)
    .map((style) => style.split(':'))
    .filter((style) => style.length === 2);

  separateStyles.forEach(
    (style) => (result[style[0].trim()] = style[1].trim()),
  );

  return result;
}

module.exports = convertToObject;
