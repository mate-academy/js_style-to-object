'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  sourceString.split(';').forEach((item) => {
    const [key, value] = item.split(':').map((el) => el.trim());

    if (key && value) {
      obj[key] = value;
    }
  });

  return obj;
}

module.exports = convertToObject;
