'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const res = {};

  sourceString.split(';').forEach((el) => {
    const part = el.trim().split(':');

    if (part.length > 1) {
      res[part[0].trim()] = part[1].trim();
    }
  });

  return res;
}

module.exports = convertToObject;
