'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const result = sourceString
    .split(';')
    .map((item) => item.split(':'))
    .reduce(createObject, {});

  function createObject(acc, item) {
    if (item[0].trim().length === 0) {
      return acc;
    }

    return Object.assign(acc, {
      [item[0].trim()]: item[1].trim(),
    });
  }

  return result;
}

module.exports = convertToObject;
