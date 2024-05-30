'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.trim().split(';');

  const stylesObject = {};

  for (const style of stylesArray) {
    const [property, value] = style.split(':').map((el) => el.trim());

    if (property && value) {
      stylesObject[property] = value;
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
