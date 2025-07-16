'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString
    .split(';')
    .map((element) => element.trim())
    .filter((element) => element && element.includes(':'))
    .map((element) => element.split(':').map((str) => str.trim()));

  const sourceObj = Object.fromEntries(sourceArray);

  return sourceObj;
}

module.exports = convertToObject;
