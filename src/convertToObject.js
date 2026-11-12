'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((result, curentvalue) => {
    const [key, value] = curentvalue.split(':').map((s) => s.trim());

    if (key) {
      result[key] = value;
    }

    return result;
  }, {});
}

module.exports = convertToObject;
