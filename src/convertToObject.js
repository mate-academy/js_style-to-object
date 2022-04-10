'use strict';

/**
 * Implement convertToObject function:
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const listOfStyles = sourceString
    .split(';')
    .map(el => el.split(':'))
    .filter(el => el.length > 1);

  return listOfStyles.reduce((styles, [key, value]) => {
    return {
      ...styles,
      [key.trim()]: value.trim(),
    };
  }, {});
}

module.exports = convertToObject;
