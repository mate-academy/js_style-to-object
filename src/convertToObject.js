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
  return sourceString
    .split(';')
    .map(declaration => declaration.trim())
    .filter(trimmedDeclaration => trimmedDeclaration.length > 0)
    .reduce((accumulator, validDeclaration) => {
      // знаходимо першу двокрапку для розділення ключа та значення.
      const separatorIndex = validDeclaration.indexOf(':');

      const propertyName = validDeclaration
        .slice(0, separatorIndex)
        .trim();

      const propertyValue = validDeclaration
        .slice(separatorIndex + 1)
        .trim();

      // повертаємо НОВИЙ об'єкт, копіюючи старий стан і додаючи нову властивість.
      // дозволяє уникнути прямої мутації об'єкта accumulator.
      return {
        ...accumulator,
        [propertyName]: propertyValue
      };
    }, {}); // {} — це початкове значення для акумулятора.
}



module.exports = convertToObject;
