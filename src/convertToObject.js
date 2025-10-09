'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split(';');

  return lines.reduce((accumulator, line) => {
    if (line.trim().length === 0) {
      return accumulator;
    }

    const parts = line.split(':');

    if (parts.length < 2) {
      return accumulator;
    }

    const [key, value] = parts;

    if (!key || !value) {
      return accumulator;
    }

    const keyTrimmed = key.trim();
    const valueTrimmed = value.trim();

    if (!keyTrimmed || !valueTrimmed) {
      return accumulator;
    }
    accumulator[keyTrimmed] = valueTrimmed;

    return accumulator;
  }, {});
}

module.exports = convertToObject;
