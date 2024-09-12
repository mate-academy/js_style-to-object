'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, rec) => {
    const entries = rec.split(':');

    if (entries.length === 2) {
      const key = entries[0].trim();
      const value = entries[1].trim();

      return {
        ...acc, [key]: value,
      };
    } else {
      return {
        ...acc,
      };
    }
  }, {});
}

module.exports = convertToObject;
