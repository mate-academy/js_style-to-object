'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  return sourceString.split(';').reduce((object, prop) => {
    const [key, value] = prop.split(':').map((part) => part.trim());

    if (key) {
      object[key] = value;
    }

    return object;
  }, {});
}

module.exports = convertToObject;
