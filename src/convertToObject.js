'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = sourceString.split(';');
  const formatedProperties = {};

  cssProperties.forEach((element) => {
    if (element.trim().length > 0) {
      const [key, value] = element.split(':');

      if (key && value) {
        const trimmedKey = key.trim();
        const trimmedValue = value.trim();

        formatedProperties[trimmedKey] = trimmedValue;
      }
    }
  });

  return formatedProperties;
}

module.exports = convertToObject;
