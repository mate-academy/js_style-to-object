'use strict';

/**
 * Converts CSS string to object.
 *
 * @param {string} sourceString CSS code.
 *
 * @return {Object} CSS code converted to keys and values.
 */
function convertToObject(sourceString) {
  return sourceString
    .trim()
    .split(';')

    .map((line) => line.split(':').map((el) => el.trim()))

    .filter((el) => el.length === 2 && el.every((element) => element))

    .reduce((acc, [item, value]) => {
      acc[item] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
