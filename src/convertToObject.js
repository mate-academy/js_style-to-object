'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const props = sourceString.split(';').map((prop) => prop.trim());

  for (const prop of props) {
    const [key, value] = prop.split(':');

    if (key) {
      obj[key.trim()] = value.trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
