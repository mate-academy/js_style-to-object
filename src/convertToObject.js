'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarationsList = sourceString.split(';');

  const cleaned = declarationsList
    .map((elm) => elm.trim())
    .filter((elm) => elm.length);

  const pairs = cleaned
    .map((elm) => {
      const parts = elm.split(':');

      if (parts.length < 2) {
        return null;
      }

      const key = parts.shift().trim();
      const value = parts.join(':').trim();

      return [key, value];
    })
    .filter(Boolean);

  const stylesObject = pairs.reduce((acc, [key, value]) => {
    acc[key] = value;

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
