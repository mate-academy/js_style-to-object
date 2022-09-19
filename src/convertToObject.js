'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').filter(item =>
    item.trim() !== '').reduce((acc, el) => {
    const [key, value] = el.split(':');

    return {
      ...acc,
      [key.trim()]: value.trim(),
    };
  }, {});
}

module.exports = convertToObject;
