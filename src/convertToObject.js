'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const m = sourceString.split(';');

  m.forEach((item) => {
    if (item.trim() === '') {
      return;
    }

    const parts = item.split(':');

    const key = parts[0].trim();
    const value = parts[1].trim();

    styleObject[key] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
