'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitedArray = sourceString.trim().split(';');

  const resultObject = splitedArray.reduce((acc, style) => {
    const [key, value] = style.split(':').map((s) => s.trim());
    if (key && value) {
      acc[key] = value;
    }
    return acc;
  }, {});

  return resultObject;
}

module.exports = convertToObject;
