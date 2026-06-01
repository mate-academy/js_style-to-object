'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const sourceStringArray = sourceString.split(';');

  sourceStringArray.forEach((item) => {
    const style = item.trim();

    if (!style) {
      return;
    }

    const [key, value] = item.split(':');

    result[key.trim()] = value.trim();
  });

  return result;
}

module.exports = convertToObject;
