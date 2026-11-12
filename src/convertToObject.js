'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceStringClone = sourceString;

  return sourceStringClone.split(';').reduce((acc, curentvalue) => {
    const [key, value] = curentvalue.split(':').map((s) => s.trim());

    if (key) {
      acc[key] = value;
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
