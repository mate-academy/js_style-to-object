'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const cleanedString = sourceString.split(';');
  const elementsOfString = cleanedString.reduce((prev, current) => {
    const [key, value] = current.split(':');

    if (key.trim() && value) {
      prev[key.trim()] = value.trim();
    }

    return prev;
  }, {});

  return elementsOfString;
}

module.exports = convertToObject;
