'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  // if (sourceString === '') {
  //   return {};
  // }

  const splited = sourceString.split(';');

  for (const elem of splited) {
    const result = elem.split(':').map((item) => item.trim());

    if (result[0]) {
      obj[result[0]] = result[1];
    }
  }

  return obj;
}

module.exports = convertToObject;
