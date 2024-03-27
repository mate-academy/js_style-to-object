'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.trim().length === 0) {
    return {};
  }

  return sourceString.split(';').reduce((acum, el) => {
    const [key, value] = el.split(':');

    if (key && value) {
      return { ...acum, [key.trim()]: value.trim() };
    }

    return { ...acum };
  }, {});
}

module.exports = convertToObject;
