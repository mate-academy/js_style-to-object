'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const newObj = {};
  const parts = sourceString
    .split(';')
    .map((x) => x.trim())
    .filter((x) => x !== '')
    .map((x) => x.split(':'));

  parts.forEach((x) => {
    newObj[x[0].trim()] = x[1].trim();
  });

  return newObj;
}

module.exports = convertToObject;
