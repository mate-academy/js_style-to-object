'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arraySource = sourceString
    .split(';')
    .map((element) => element.trim().split(':'))
    .map((element) => element.map((value) => value.trim()))
    .map((element) => element.filter((value) => value !== ''))
    .filter((element) => element.length !== 0);

  const objSource = arraySource.reduce((prev, element) => {
    return { ...prev, [element[0]]: element[1] };
  }, {});

  return objSource;
}

module.exports = convertToObject;
