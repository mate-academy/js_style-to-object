'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style.length > 0)
    .map(style => style.split(':'))
    .reduce((prev, style) => ({
      ...prev,
      [style[0].trim()]: style[1].trim(),
    }), {});

  return properties;
}

module.exports = convertToObject;
