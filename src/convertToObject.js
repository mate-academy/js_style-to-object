'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const stylesObject = {};

  const stylesArray = stylesString
    .split(';')
    .filter((style) => style.trim() !== '');

  stylesArray.forEach((style) => {
    const [property, ...valueParts] = style.split(':');
    const value = valueParts.join(':').trim();

    if (property && value) {
      const cleanedValue = value.replace(/\n\s+/g, (match) => match);

      stylesObject[property.trim()] = cleanedValue;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
