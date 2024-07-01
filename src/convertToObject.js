'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylesObject = {};

  const lines = sourceString.split(';');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const indexOfColon = line.indexOf(':');

    if (indexOfColon !== -1) {
      const property = line.slice(0, indexOfColon);
      const value = line.slice(indexOfColon + 1);

      stylesObject[property.trim()] = value.trim();
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
