'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((declaration) => declaration.split(':'))
    .filter((parts) => parts.length > 1 && parts[0].trim() !== '')
    .reduce((styles, [property, ...valueParts]) => {
      return {
        ...styles,
        [property.trim()]: valueParts.join(':').trim(),
      };
    }, {});
}

module.exports = convertToObject;
