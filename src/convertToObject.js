'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrOfStyles = sourceString
    .split(';')
    .map(element => element.split(':'))
    .filter(element => element.length > 1);

  return arrOfStyles.reduce((cssStyles, [key, value]) => {
    return {
      ...cssStyles,
      [key.trim()]: value.trim(),
    };
  }, {});
}

module.exports = convertToObject;
