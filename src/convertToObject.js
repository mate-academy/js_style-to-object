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

  const stringToObject = sourceString
    .split(';')
    .map((value) => {
      return value.split(':').map((withoutSpace) => withoutSpace.trim());
    })
    .reduce((acc, value) => {
      acc[value[0]] = value[1];

      return acc;
    }, {});

  return stringToObject;
}

module.exports = convertToObject;
