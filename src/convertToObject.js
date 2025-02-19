'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString
    .split(';')
    .map((rows) => rows.trim())
    .filter((newRows) => newRows.trim())
    .map((row) => row.split(':'))
    .map(([word, value]) => [word.trim(), value.trim()])
    .map((element) => ({
      [element[0]]: element[1],
    }))
    .reduce((newObj, thatObj) => {
      for (const key in thatObj) {
        newObj[key] = thatObj[key];
      }

      return newObj;
    }, {});

  return result;
}

module.exports = convertToObject;
