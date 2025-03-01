'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let source = sourceString.split(';');

  source = source.filter((x) => x.length > 0);
  source = source.map((x) => x.split(':').map((y) => y.trim()))

  let result = {};

  for (let input of source) {
    result[input[0]] = input[1]
  }

  return result;
}

module.exports = convertToObject;
