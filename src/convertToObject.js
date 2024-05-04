'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((obj, item) => {
    const [name, value] = item.trim().split(':');

    if (name && value) {
      obj[name.trim()] = value.trim();
    }

    return obj;
  }, {});
}

module.exports = convertToObject;
