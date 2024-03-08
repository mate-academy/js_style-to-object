'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  // Розділяємо рядок на окремі оголошення CSS
  const declarations = sourceString.split(';');

  // Проходимося по кожному оголошенню CSS
  declarations.forEach((declaration) => {
    // Розділяємо оголошення на назву стилю та його значення
    const parts = declaration.split(':');

    if (parts.length === 2) {
      // Видаляємо зайві пробіли trim
      const property = parts[0].trim();
      const value = parts[1].trim();

      // Додаємо стиль
      styles[property] = value;
    }
  });

  return styles;
}

module.exports = convertToObject;
