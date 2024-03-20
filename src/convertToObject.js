'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((object, property) => {
    const trimmed = property.trim();

    if (trimmed === '') {
      return object;
    }

    const elements = trimmed.split(':').map((element) => element.trim());

    object[elements[0]] = elements[1];

    return object;
  }, {});
}

module.exports = convertToObject;
