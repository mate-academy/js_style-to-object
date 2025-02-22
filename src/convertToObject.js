'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, declaration) => {
    const [property, value] = declaration.split(':').map((part) => part.trim());

    if (property && value) {
      acc[property] = value;
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
