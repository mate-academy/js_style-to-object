'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const object = sourceString
    .split(';')
    .map((element) => {
      return element.split(':').map((part) => part.trim());
    })
    .filter((array) => array.length !== 1)
    .reduce((result, element) => {
      result[element[0]] = element[1];

      return result;
    }, {});

  return object;
}

module.exports = convertToObject;
