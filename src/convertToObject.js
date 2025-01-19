'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let result = {};

  const splitString = sourceString.split(';');
  const withoutSpaceString = splitString.map((part) => part.trim());
  const filterString = withoutSpaceString.filter(
    (elem) => elem !== '' && elem !== ';',
  );
  const arrayFromString = filterString.map((elem) => {
    const array = elem.split(':');

    return [array[0].trim(), array[1].trim()];
  });

  result = arrayFromString.reduce((prev, elem) => {
    prev[elem[0]] = elem[1];

    return prev;
  }, {});

  return result;
}

module.exports = convertToObject;
