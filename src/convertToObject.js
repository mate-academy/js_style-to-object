'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const convertedStyleToObject = {};

  sourceString
    .split(';')
    .filter((el) => el.includes(':'))
    .map((el) => el.split(':'))
    .forEach((el) => (convertedStyleToObject[el[0].trim()] = el[1].trim()));

  return convertedStyleToObject;
}

module.exports = convertToObject;
