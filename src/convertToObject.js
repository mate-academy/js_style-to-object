'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newSourceString = sourceString.split(';');
  const resSourceString = {};

  for (let i = 0; i < newSourceString.length; i++) {
    const [key, value] = newSourceString[i].split(':');

    if (key.trim() && value && value.trim()) {
      resSourceString[key.trim()] = value.trim();
    }
  }

  return resSourceString;
}

module.exports = convertToObject;
