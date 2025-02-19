'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const styleArray = sourceString
    .split(';')
    .map((style) => style.trim())
    .filter(Boolean);

  styleArray.forEach((style) => {
    const [property, value] = style.split(':').map((str) => str.trim());

    // Add the property-value pair to the object
    if (property && value) {
      styleObject[property] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
