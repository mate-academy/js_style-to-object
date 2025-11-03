'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringArr = sourceString.split(';').filter((item) => item.trim());

  const result = {};

  stringArr.forEach((item) => {
    const [key, value] = item.split(':');

    result[key.trim()] = value.trim();
  });

  return result;
}

module.exports = convertToObject;
