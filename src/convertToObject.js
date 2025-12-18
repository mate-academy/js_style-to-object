'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = {};

  sourceString.split(';').forEach((declaration) => {
    const [key, value] = declaration.split(':');

    if (key && value) {
      cssProperties[key.trim()] = value.trim();
    }
  });

  return cssProperties;
}

module.exports = convertToObject;
