'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const arrNamePlusValue = sourceString
    .split(';')
    .map((str) => str.trim())
    .filter(Boolean);
  const arrNameAndValue = arrNamePlusValue.map((str) => {
    const parts = str.split(':');

    return parts.map((part) => part.trim());
  });
  const result = {};

  arrNameAndValue.forEach((element) => {
    result[element[0]] = element[1];
  });

  return result;
}

module.exports = convertToObject;
