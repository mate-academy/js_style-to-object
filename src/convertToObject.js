'use strict';

// const complexStylesString = require('./stylesString');

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newString = sourceString.split(';');

  const objects = newString
    .map((element) => element.split(':'))
    .filter((item) => item.length > 1);

  const result = {};

  objects
    .map((item) => [item[0].trim(), item[1].trim()])
    .forEach((item) => {
      return item[0].includes('-')
        ? (result[`${item[0]}`] = item[1])
        : (result[item[0]] = item[1]);
    });

  return result;
}

module.exports = convertToObject;
