'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
const convertToObject = function (sourceString) {
  return sourceString
    .trim()
    .split(';')
    .filter(Boolean)
    .map((declaration) => declaration.split(':').map((part) => part.trim()))
    .reduce((acc, [property, value]) => {
      acc[property] = value;

      return acc;
    }, {});
};

module.exports = convertToObject;
