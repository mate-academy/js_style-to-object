'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const newArray = sourceString.split(';');

  newArray.forEach((pair) => {
    const [key, value] = pair.split(':').map((str) => str.trim());

    if (key && value) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
