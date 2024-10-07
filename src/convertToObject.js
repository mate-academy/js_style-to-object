'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // Remove tab characters and split the string into an array
  const styleStringArray = sourceString.replaceAll('\t', '').split(';');

  // Reduce the array into an object, trimming the key and value
  const styleObject = styleStringArray.reduce((acc, style) => {
    const [key, value] = style.split(':');

    if (key && value) {
      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
