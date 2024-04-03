'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString
    .split(';')
    .filter((style) => style.length !== 0);
  const stylesObject = {};

  stylesArray.forEach((style) => {
    const [property, value] = style.split(':').map((name) => name.trim());

    if (property !== '' && value !== '') {
      stylesObject[property] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
