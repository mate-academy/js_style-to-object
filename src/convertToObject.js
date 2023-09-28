'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const stylesArray = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter(item => item !== '');

  stylesArray.forEach((style) => {
    const [key, value] = style.split(':')
      .map((part) => part.trim());

    stylesObject[key] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
