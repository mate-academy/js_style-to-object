'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const obj = {};
  const keyValuePairs = sourceString.trim().split(';');

  keyValuePairs.forEach((el) => {
    const [key, value] = el.split(':');

    if (key && value) {
      obj[key.trim()] = value.trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
