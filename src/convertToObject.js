'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.trim().split(';');
  const obj = {};

  arr.forEach((string) => {
    if (string === '') {
      return;
    }

    const [key, value] = string.split(':').map((item) => item.trim());

    if (key && value) {
      obj[key] = value;
    }
  });

  return obj;
}

module.exports = convertToObject;
