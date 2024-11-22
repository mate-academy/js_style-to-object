'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = {};

  const splitString = sourceString.split(';');

  splitString.forEach((property) => {
    const [key, ...valueParts] = property.split(':');

    if (key && valueParts.length > 0) {
      const trimmedKey = key.trim();
      const trimmedValue = valueParts.join(' ').trim();

      if (trimmedKey && trimmedValue) {
        object[trimmedKey] = trimmedValue;
      }
    }
  });

  return object;
}

module.exports = convertToObject;
