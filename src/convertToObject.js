'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const items = sourceString.split(';').map((item) => item.split(':'));

  items.forEach((item) => {
    const [key, value] = item;

    if (value) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
