'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssInstruction = {};

  const pairs = sourceString.split(';');

  for (const pair of pairs) {
    const [key, ...values] = pair.split(':');

    if (key && values.length > 0) {
      const trimmedKey = key.trim();

      const trimmedValue = values.join(':').trim();

      cssInstruction[trimmedKey] = trimmedValue;
    }
  }

  return cssInstruction;
}

module.exports = convertToObject;
