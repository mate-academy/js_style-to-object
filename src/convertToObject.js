'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((validRows) => validRows.includes(':'))
    .reduce((stylesAccc, validStyleRow) => {
      const [key, ...value] = validStyleRow.split(':');

      stylesAccc[key.trim()] = value.join(':').trim();

      return stylesAccc;
    }, {});
}

module.exports = convertToObject;
