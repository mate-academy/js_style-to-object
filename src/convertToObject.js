'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((property) => property.trim())
    .filter((property) => property !== '')
    .map((property) => property.split(':').map((element) => element.trim()))
    .reduce(
      (object, property) => ({
        ...object,
        [property[0]]: property[1],
      }),
      {},
    );
}

module.exports = convertToObject;
