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
    const [property, value] = item.split(':').map((el) => el.trim());

    if (property && value) {
      styleObject[property] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
