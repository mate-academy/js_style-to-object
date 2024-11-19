'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObject = sourceString.split(';').reduce((acc, elem) => {
    const [key, value] = elem.split(':');

    if (key && value) {
      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});

  return newObject;
}

module.exports = convertToObject;
