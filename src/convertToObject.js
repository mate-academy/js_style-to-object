'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObj = {};

  sourceString.split(';').forEach((item) => {
    const [key, value] = item.split(':').map((str) => str.trim());

    if (key && value) {
      styleObj[key] = value;
    }
  });

  return styleObj;
}

module.exports = convertToObject;
