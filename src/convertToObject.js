'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  /**
 * Функція для перетворення рядка CSS-стилів у об'єкт.
 * @param {string} stylesString - Рядок із CSS деклараціями.
 * @returns {Object} - Об'єкт, де ключі — це властивості, а значення — їхні параметри.
 */
function convertToObject(sourceString) {
  // Використовуємо ланцюжок методів для обробки рядка без мутацій
  return sourceString
    .split(';')
    .map(declaration => declaration.trim())
    .filter(trimmedDeclaration => trimmedDeclaration.length > 0)
    .reduce((accumulator, validDeclaration) => {
      // Знаходимо першу двокрапку для точного розділення ключа та значення
      const separatorIndex = validDeclaration.indexOf(':');

      const propertyName = validDeclaration
        .slice(0, separatorIndex)
        .trim();

      const propertyValue = validDeclaration
        .slice(separatorIndex + 1)
        .trim();

      // Повертаємо новий об'єкт, поєднуючи накопичені дані з новою властивістю
      return {
        ...accumulator,
        [propertyName]: propertyValue,
      };
    }, {});
}

module.exports = convertToObject;
