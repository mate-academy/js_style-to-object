'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  sourceString.split(';').forEach((declaration) => {
    const [key, value] = declaration.split(':').map((part) => part?.trim());

    if (key && value) {
      styleObject[key] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
