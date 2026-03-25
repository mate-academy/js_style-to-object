'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const attributePairs = sourceString
    .split(';')
    .filter((pair) => pair.trim() !== '')
    .map((pair) => pair.split(':'))
    .map((pair) => {
      if (pair.length === 2) {
        return [pair[0].trim(), pair[1].trim()];
      }

      return null;
    })
    .filter((pair) => pair !== null);

  const styleObject = attributePairs.reduce((acc, pair) => {
    acc[pair[0]] = pair[1];

    return acc;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
