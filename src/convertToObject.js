'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, item) => {
    const current = item.split(':');

    if (current[0].trim()) {
      acc[`${current[0]}`.trim()] = `${current[1]}`.trim();
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
