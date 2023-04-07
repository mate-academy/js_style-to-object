'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitStrings = sourceString.split(';');
  const finalObj = {};

  splitStrings.forEach((style) => {
    const [property, value] = style.split(':');

    if (property && value) {
      finalObj[property.trim()] = value.trim();
    }
  });

  return finalObj;
}

module.exports = convertToObject;
