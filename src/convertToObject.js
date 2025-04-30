'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  let splitted = sourceString.split(';');

  splitted = splitted.map((item) => {
    return item.split(':');
  });

  for (const s of splitted) {
    if (s[1]) {
      obj[`${s[0].trim()}`] = s[1].trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
