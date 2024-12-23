'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((accumulator, element) => {
    const [key, value] = element.split(':').map((part) => part.trim());

    if (key && value) {
      accumulator[key] = value;
    }

    return accumulator;
  }, {});
}

module.exports = convertToObject;
