'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = sourceString.split(';').reduce((prev, item) => {
    const [style, value] = item.split(':');

    if (style && value) {
      prev[style.trim()] = value.trim();
    }

    return prev;
  }, {});

  return result;
}

module.exports = convertToObject;
