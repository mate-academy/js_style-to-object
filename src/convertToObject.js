'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const CONVERTED_STYLES = {};

  sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line)
    .forEach((line) => {
      const [key, ...valueParts] = line.split(':');

      if (key && valueParts.length > 0) {
        CONVERTED_STYLES[key.trim()] = valueParts.join(':').trim();
      }
    });

  return CONVERTED_STYLES;
}

module.exports = convertToObject;
