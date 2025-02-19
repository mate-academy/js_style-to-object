'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  return sourceString
    .trim()
    .split(';')
    .filter((el) => el.trim() !== '')
    .reduce((acc, el) => {
      const [key, value] = el.split(':');
      const keyResult = key.trim();
      const valueResult = value.trim();

      acc[keyResult] = valueResult;

      return acc;
    }, {});
}

module.exports = convertToObject;
