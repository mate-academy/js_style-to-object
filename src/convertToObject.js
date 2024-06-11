'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedObject = {};

  const declarations = sourceString.split(';');

  declarations.forEach((split) => {
    const [property, value] = split.split(':').map((part) => part.trim());

    if (property && value) {
      convertedObject[property] = value;
    }
  });

  return convertedObject;
}

module.exports = convertToObject;
