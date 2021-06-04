'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectCSS = {};
  const propertiesObjectCSS = sourceString.split(';');

  propertiesObjectCSS.forEach(element => {
    const property = element.split(':');

    if (!property[0] || !property[1]) {
      return;
    }

    objectCSS[property[0].trim()] = property[1].trim();
  });

  return objectCSS;
}

module.exports = convertToObject;
