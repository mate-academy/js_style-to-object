'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};
  const propertiesArray = sourceString.split(';');

  propertiesArray.forEach((element) => {
    const [property, value] = element.split(':').map((item) => item.trim());

    cssObject[property] = value;
  });

  return cssObject;
}

module.exports = convertToObject;
