'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  // Розділяємо рядок на окремі оголошення
  const stylesArray = sourceString.split(';');

  stylesArray.forEach((declaration) => {
    if (declaration.trim() === '') {
      return;
    }

    const [property, value] = declaration.split(':');

    if (property && value) {
      styleObject[property.trim()] = value.trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
