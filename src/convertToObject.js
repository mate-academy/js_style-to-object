'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
// module.exports = complexStylesString;

function convertToObject(sourceString) {
  const object = {};
  const arr = sourceString.split(';');

  for (const ch of arr) {
    const [property, value] = ch.split(':');

    if (property && value) {
      object[property.trim()] = value.trim();
    }
  }

  return object;
}

module.exports = convertToObject;
