'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrFromString = sourceString.split(';');

  return arrFromString.reduce((result, item) => {
    const [key, value] = item.trim().split(':');

    if (key && value) {
      result[key.trim()] = value.trim();
    }

    return result;
  }, {});
}

module.exports = convertToObject;
