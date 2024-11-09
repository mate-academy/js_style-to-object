'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const items = sourceString.split(';');
  const result = {};

  items.map((item) => {
    const [key, value] = item.split(':').map((str) => str.trim());

    if (key && value) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
