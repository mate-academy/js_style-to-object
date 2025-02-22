'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  if (sourceString) {
    return sourceString
      .split(';')
      .map((row) => row.split(':').map((param) => param.trim()))
      .filter((row) => row.length > 1)
      .map((e) => ({ [e[0]]: e[1] }))
      .reduce((prew = {}, e) => ({ ...prew, ...e }));
  } else {
    return {};
  }
}

module.exports = convertToObject;
