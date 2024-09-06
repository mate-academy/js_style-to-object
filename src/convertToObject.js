'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylePairs = sourceString
    .trim()
    .split(';')
    .map((pair) => pair.trim().split(':'))
    .filter((pair) => pair.length > 1);

  const styleObj = {};

  stylePairs.forEach((pair) => {
    const key = pair[0].trim();
    const value = pair[1].trim();

    styleObj[key] = value;
  });

  return styleObj;
}

module.exports = convertToObject;
