'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = sourceString
    .split(';')
    .map((styles) => styles.trim())
    .filter((styles) => styles.length > 0)
    .map((styles) => styles.split(':'))
    .reduce(
      (object, styles) => ({
        ...object,
        [styles[0].trim()]: styles[1].trim(),
      }),
      {},
    );

  return stylesObject;
}

module.exports = convertToObject;
