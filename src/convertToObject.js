'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitWithSemicolon = sourceString.split(';');
  const objectOfStyle = {};

  for (let i = 0; i < splitWithSemicolon.length; i++) {
    if (splitWithSemicolon[i].includes(':')) {
      const [key, ...valueParts] = splitWithSemicolon[i].split(':');
      const value = valueParts.join(':').trim();

      objectOfStyle[key.trim()] = value;
    }
  }

  return objectOfStyle;
}
module.exports = convertToObject;
