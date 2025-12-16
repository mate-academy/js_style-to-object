'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.split(';');

  return properties.reduce((obj, prop) => {
    if (prop.trim() !== '') {
      const parts = prop.split(':');
      const key = parts[0].trim();
      const value = parts[1].replace(';', '').trim();

      obj[key] = value;
    }

    return obj;
  }, {});
}

module.exports = convertToObject;
