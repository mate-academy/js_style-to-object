'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const converted = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el.length > 0)
    .reduce((obj, curr) => {
      const arrValue = curr.split(':').map((el) => el.trim());

      obj[arrValue[0]] = arrValue[1];

      return obj;
    }, {});

  return converted;
}

module.exports = convertToObject;
