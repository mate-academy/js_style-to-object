'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const formatedArr = sourceString
    .split(';')
    .map((el) => el.split(':').map((attribute) => attribute.trim()))
    .filter((check) => check.length > 1);

  return Object.fromEntries(formatedArr);
}

module.exports = convertToObject;
