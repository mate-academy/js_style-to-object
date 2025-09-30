'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObj = {};
  const keyValue = sourceString.split(';');

  keyValue.forEach((pair) => {
    const [key, value] = pair.split(':');

    if (key && value) {
      newObj[key.trim()] = value.trim();
    }
  });

  return newObj;
}

module.exports = convertToObject;
