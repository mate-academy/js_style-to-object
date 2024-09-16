'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourseArray = sourceString.split(';');

  return sourseArray
    .map(style => style.trim().split(':'))
    .filter(([property, value]) => property && value)
    .reduce((styles, [property, value]) => {
      styles[property.trim()] = value.trim();

      return styles;
    }, {});
}

module.exports = convertToObject;
