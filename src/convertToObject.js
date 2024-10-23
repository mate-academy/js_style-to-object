'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styleString) {
  const stylesObject = {};

  // Видаляємо всі зайві переносні символи та нормалізуємо рядок
  const cleanedStyleString = styleString.trim();

  // Розбиваємо стиль на окремі правила
  const declarations = cleanedStyleString.split(';');

  declarations.forEach((declaration) => {
    if (declaration.includes(':')) {
      // Розбиваємо правило на властивість і значення
      const [property, value] = declaration.split(':');

      if (property && value) {
        const trimmedProperty = property.trim();
        const trimmedValue = value.trim();

        // Зберігаємо тільки коректні пари властивість: значення
        if (trimmedProperty && trimmedValue) {
          stylesObject[trimmedProperty] = trimmedValue;
        }
      }
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
