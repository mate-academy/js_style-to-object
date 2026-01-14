'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const parts = sourceString.split(';');

  parts.forEach((element) => {
    const part = element.trim();

    if (!part) {
      return;
    }

    const index = part.indexOf(':');

    if (index === -1) {
      return;
    }

    const key = part.slice(0, index).trim();
    const value = part.slice(index + 1).trim();

    if (key !== '' && value !== '') {
      styleObject[key] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
