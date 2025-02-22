'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArray = sourceString.split(';');

  const styleObject = styleArray.reduce((acc, style) => {
    const [property, value] = style.split(':').map((part) => part.trim());

    if (property && value) {
      acc[property] = value;
    }

    return acc;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
