'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');
  const obj = {};

  arr.forEach((e) => {
    const tmp = e.trim().split(':');

    if (tmp.length < 2) {
      return;
    }
    obj[tmp[0].trim()] = tmp[1].trim();
  });

  return obj;
}

module.exports = convertToObject;
