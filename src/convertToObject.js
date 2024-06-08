'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedObject = {};

  const splited = sourceString.split(';');

  splited.forEach((split) => {
    if (split.trim()) {
      const [property, value] = split.split(':');

      convertedObject[property.trim()] = value.trim();
    }
  });

  return convertedObject;
}

module.exports = convertToObject;
