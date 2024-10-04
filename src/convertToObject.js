'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString.split(';').map((el) => el.split(':'));

  const result2 = {};

  result.forEach((el) => {
    if (el.length === 2) {
      const key = el[0].trim();
      const value = el[1] ? el[1].trim() : '';

      result2[key] = value;
    }
  });

  return result2;
}

module.exports = convertToObject;
