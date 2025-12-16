'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.split(';');

  return properties.reduce((styleObject, prop) => {
    if (prop.trim() !== '') {
      const parts = prop.split(':');

      if (parts[0] !== undefined) {
        const key = parts[0].trim();
        const value = parts[1].replace(';', '').trim();

        styleObject[key] = value;
      }
    }

    return styleObject;
  }, {});
}

module.exports = convertToObject;
