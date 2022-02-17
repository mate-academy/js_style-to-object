'use strict';

/**
 * Implement convertToObject function:
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedStyles = sourceString.split(';')
    .map(row => row.split(':'))
    .filter(element => element.length > 1);

  return splittedStyles.reduce((cssStyles, [prop, value]) => {
    cssStyles[prop.trim()] = value.trim();

    return cssStyles;
  }, {});
}

module.exports = convertToObject;
