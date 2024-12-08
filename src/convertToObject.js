'use strict';

function convertToObject(sourceString) {
  if (sourceString === '') {
    return {};
  }

  const stylesByArray = sourceString.split(';');

  const clearWords = stylesByArray.map((style) => style.trim());

  const makePairs = clearWords
    .filter((word) => word.includes(':'))
    .map((word) => word.split(':'));

  const makeWords = makePairs.reduce((result, word) => {
    result[word[0].trim()] = word[1].trim();

    return result;
  }, {});

  return makeWords;
}

module.exports = convertToObject;
