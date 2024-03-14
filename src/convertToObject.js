'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringSplit = sourceString.split(';');

  return stringSplit.reduce((result, style) => {
    const [key, value] = style.split(':').map((part) => part.trim());

    if (key && value) {
      result[key] = value;
    }

    return result;
  }, {});
}

module.exports = convertToObject;
