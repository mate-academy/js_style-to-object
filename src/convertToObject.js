'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split('\n');
  const styleObject = {};

  for (const line of lines) {
    const [property, value] = line
      .split(':')
      .map((part) => part.replace(';', '').trim());

    if (property && value) {
      styleObject[property] = value;
    }
  }

  return styleObject;
}

module.exports = convertToObject;
