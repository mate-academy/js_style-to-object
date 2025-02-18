'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedToObject = sourceString
    .split(';')
    .filter((el) => el.includes(':'))
    .map((el) => el.split(':').map((part) => part.trim()))
    .reduce((acc, [key, value]) => {
      acc[key] = value;

      return acc;
    }, {});

  return convertedToObject;
}

module.exports = convertToObject;
