'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObject = {};
  const splitProperties = sourceString.split(';');

  splitProperties.forEach((style) => {
    const [property, values] = style.split(':');

    if (property && values) {
      newObject[property.trim()] = values.trim();
    }
  });

  return newObject;
}

module.exports = convertToObject;
