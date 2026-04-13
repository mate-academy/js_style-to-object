'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(styles) {
  return styles.split(';').reduce((acc, item) => {
    const clean = item.trim();

    if (!clean) {
      return acc;
    }

    const colonIndex = clean.indexOf(':');

    if (colonIndex === -1) {
      return acc;
    }

    const key = clean.slice(0, colonIndex).trim();
    const value = clean.slice(colonIndex + 1).trim();

    if (key && value) {
      acc[key] = value;
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
