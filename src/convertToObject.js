'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const styleDeclarations = sourceString.split(';');

  styleDeclarations.forEach((item) => {
    const [property, value] = item.split(':');

    if (property === undefined || value === undefined) {
      return;
    }

    styleObject[property.trim()] = value.trim();
  });

  return styleObject;
}

module.exports = convertToObject;
