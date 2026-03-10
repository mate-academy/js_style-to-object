'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // Використовуємо ланцюжок методів ітерації для створення об'єкта без мутацій.
  // Кожен метод викликається з нового рядка з однаковим відступом для читабельності.
  return sourceString
    .split(';')
    .map(declaration => declaration.trim())
    .filter(trimmedDeclaration => trimmedDeclaration.length > 0)
    .reduce((accumulator, validDeclaration) => {
      // Знаходимо першу двокрапку, щоб розділити назву властивості та її значення.
      const separatorIndex = validDeclaration.indexOf(':');

      // Витягуємо назву та значення, очищаючи їх від зайвих пробілів.
      const propertyName = validDeclaration
        .slice(0, separatorIndex)
        .trim();

      const propertyValue = validDeclaration
        .slice(separatorIndex + 1)
        .trim();

      // Повертаємо новий об'єкт, копіюючи попередній стан і додаючи нову пару.
      return {
        ...accumulator,
        [propertyName]: propertyValue,
      };
    }, {});
}

module.exports = convertToObject;
