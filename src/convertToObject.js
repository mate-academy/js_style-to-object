'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const stylesArray = sourceString.split(';');
  // розрізали на ("властивість: значення")

  stylesArray.forEach((style) => {
    const [property, ...valueParts] = style.split(':');
    // розбиває кожен елемент масиву на дві частини - властивість ';' значення
    const trimmedProperty = property.trim();
    const trimmedValue = valueParts.join(':').trim();
    // видаляють зайві пробіли

    if (trimmedProperty && trimmedValue) {
      stylesObject[trimmedProperty] = trimmedValue;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
