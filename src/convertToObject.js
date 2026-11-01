'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const result = {};
  const trimmed = sourceString.split(';').filter((item) => item.trim() !== '');

  trimmed.forEach((item) => {
    const semicolonIndex = item.indexOf(':');
    const key = item.slice(0, semicolonIndex).trim();
    const value = item.slice(semicolonIndex + 1).trim();

    // if (!key || semicolonIndex === -1) {
    //   return;
    // }

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
