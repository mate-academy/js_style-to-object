'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const valuesList = sourceString
    .split(';')
    .filter((el) => el.trim())
    .map((e) => e.split(':').map((s) => s.trim()))
    .reduce((acc, [key, value]) => {
      acc[key] = value;

      return acc;
    }, {});

  return valuesList;
}

module.exports = convertToObject;
