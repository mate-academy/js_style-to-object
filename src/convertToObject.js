'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const transformedString = sourceString
    .split(';')
    .map((el) => el.split(':').map((el1) => el1.trim()))
    .filter((el) => el.length > 1);

  const obj = {};

  for (const key in transformedString) {
    obj[transformedString[key][0]] = transformedString[key][1];
  }

  return obj;
}

module.exports = convertToObject;
