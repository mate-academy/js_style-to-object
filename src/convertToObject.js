'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const parts = sourceString.split(';');

  parts.forEach((element) => {
    const part = element.trim();

    if (!part) {
      return;
    }

    const index = part.indexOf(':');
    const key = part.slice(0, index).trim();
    const value = part.slice(index + 1).trim();

    if (key !== '' && value !== '') {
      stylesObject[key] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
