'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const trimmed = sourceString.split(';').filter((item) => item.trim() !== '');

  const cssObject = trimmed.reduce((acc, item) => {
    const semicolonIndex = item.indexOf(':');
    const key = item.slice(0, semicolonIndex).trim();
    const value = item.slice(semicolonIndex + 1).trim();

    acc[key] = value;

    return acc;
  }, {});

  return cssObject;
}

module.exports = convertToObject;
