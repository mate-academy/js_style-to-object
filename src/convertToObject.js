'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // write your code here
  const trimmedString = sourceString.trim();

  const splittedString = trimmedString.split(';');
  const removeDuplicated = splittedString.filter(
    (element) => element.length > 2,
  );

  const removeSpaces = removeDuplicated.map((element) => {
    return element.trim().split(':');
  });

  const removeEmptyString = removeSpaces.filter(
    (elemet) => elemet.length !== 1,
  );

  const result = removeEmptyString.reduce((acc, element) => {
    return { ...acc, [element[0].trim()]: element[1].trim() };
  }, {});

  return result;
}

module.exports = convertToObject;
