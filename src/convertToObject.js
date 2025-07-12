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
    .reduce((stylesAcc, validStyleRow) => {
      const [key, ...value] = validStyleRow.split(':');

      stylesAcc[key.trim()] = value.join(':').trim();

      return stylesAcc;
    }, {});
}

module.exports = convertToObject;
