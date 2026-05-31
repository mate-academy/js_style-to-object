'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const temporaryArr = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item !== '')
    .map((item) => item.split(':'));

  const newObjectDates = Object.fromEntries(
    temporaryArr.map(([key, value]) => [key.trim(), value.trim()]),
  );

  return newObjectDates;
}

module.exports = convertToObject;
