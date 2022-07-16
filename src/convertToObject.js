'use strict';

function convertToObject(sourceString) {
  const arrOfStrings = sourceString.split(';');
  const cleanArrOfStrings = arrOfStrings.map(str => str.replace(/\n/gi, ''))
    .filter(str => str.length > 0);
  const arrOfWords = cleanArrOfStrings.map(str => str.split(':'))
    .filter(str => str.length === 2);
  const result = arrOfWords.reduce((prev, str) => ({
    ...prev, [str[0].trim()]: str[1].trim(),
  }), {});

  return result;
}

module.exports = convertToObject;
