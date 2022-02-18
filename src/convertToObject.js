'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const listOfStyles = sourceString
    .split(';')
    .map(element => element.split(':'))
    .filter(element => element.length > 1);

  return listOfStyles.reduce((cssStyles, [key, value]) => {
    return {
      ...cssStyles,
      [key.trim()]: value.trim(),
    };
  }, {});
}

module.exports = convertToObject;
