'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styles = {};

  sourceString.split(';').forEach((item) => {
    const trimmedIndex = item.trim();

    if (!trimmedIndex) {
      return;
    }

    const colonIndex = trimmedIndex.indexOf(':');

    const key = trimmedIndex.slice(0, colonIndex).trim();
    const value = trimmedIndex.slice(colonIndex + 1).trim();

    styles[key] = value;
  });

  return styles;
}

module.exports = convertToObject;
