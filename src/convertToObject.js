'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((line) => line.includes(':'))
    .map((line) => {
      const [key, value] = line.split(':');
      return { [key.trim()]: value.trim() };
    })
    .reduce(
      (accumulatedObj, currentObj) => ({
        ...accumulatedObj,
        ...currentObj,
      }),
      {},
    );
}

module.exports = convertToObject;
