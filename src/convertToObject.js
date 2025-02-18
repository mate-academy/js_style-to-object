'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const cssLine = sourceString.split(';').map((item) => item.trim());

  const cssObject = cssLine.reduce((accumulator, cssString) => {
    const [key, value] = cssString.split(':');

    if (key && value) {
      const trimmedKey = key.trim();
      const trimmedValue = value.trim();

      accumulator[trimmedKey] = trimmedValue;
    }

    return accumulator;
  }, {});

  return cssObject;
}

module.exports = convertToObject;
