'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const mainObject = {};
  const trimmedString = sourceString.trim();

  const arrayFromString = trimmedString.split(';');

  arrayFromString.forEach((element) => {
    if (element.includes(':')) {
      const [property, value] = element.split(':');

      if (property && value) {
        const trimmedProperty = property.trim();
        const trimmedValue = value.trim();

        mainObject[trimmedProperty] = trimmedValue;
      }
    }
  });

  return mainObject;
}

module.exports = convertToObject;
