'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const source = sourceString;
  const splitedByASemicolon = source
    .split(';')
    .map((string) => string.trim())
    .filter((string) => string.length > 0);
  const arrOfArrsSplitedByAColon = [];

  splitedByASemicolon.forEach((string) => {
    arrOfArrsSplitedByAColon.push(string.split(':'));
  });

  const finishedArray = arrOfArrsSplitedByAColon.map((element) => {
    return element.map((string) => string.trim());
  });
  const finishedObject = {};

  finishedArray.map(([key, value]) => (finishedObject[key] = value));

  return finishedObject;
}

module.exports = convertToObject;
