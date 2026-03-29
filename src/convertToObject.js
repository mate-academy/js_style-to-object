'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const parts = sourceString.split(';');

  parts.forEach((part) => {
    const clean = part.trim();

    if (!clean) {
      return;
    }

    const [key, value] = clean.split(':');

    if (value === undefined) {
      return;
    }

    styleObject[key.trim()] = value !== undefined ? value.trim() : '';
  });

  return styleObject;
}

module.exports = convertToObject;
