'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const parts = sourceString.split(';').filter((part) => part.trim() !== '');

  for (const part of parts) {
    const [name, value] = part.split(':').map((item) => item.trim());

    styleObject[name] = value;
  }

  return styleObject;
}

module.exports = convertToObject;
