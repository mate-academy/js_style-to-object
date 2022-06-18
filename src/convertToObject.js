'use strict';

/**
 * Implement convertToObject function:
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const arrSourceString = sourceString.split(';')
    .map(property => property.trim().split(':'))
    .filter(property => property.length === 2);

  const createObj = (previous, currentArr) => {
    return {
      ...previous,
      [currentArr[0].trim()]: currentArr[1].trim(),
    };
  };

  const objSourceString = arrSourceString.reduce(createObj, {});

  return objSourceString;
}

module.exports = convertToObject;

/*
Function takes a string with styles
(see an example in [stylesString.js](./stylesString.js))
and returns an object where CSS properties are keys
and values are the values of related
CSS properties (see an exampl in [test file](./convertToObject.test.js))
*/
