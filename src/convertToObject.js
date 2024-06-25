'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrFromSource = sourceString
    .trim()
    .split(';')
    .map((el) =>
      el
        .trim()
        .split(':')
        .map((item) => item.trim()),);

  const obj = {};

  arrFromSource.forEach((el) => {
    if (el.length === 2) {
      obj[el[0]] = el[1];
    }
  });

  return obj;
}
module.exports = convertToObject;
