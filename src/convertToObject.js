'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    // Розділяємо на ключ і значення за допомогою двокрапки
    const [property, value] = declaration.split(':');

    // Перевіряємо чи обидва значення існують
    if (property && value) {
      // Видаляємо зайві пробіли та додаємо до об'єкта
      styles[property.trim()] = value.trim();
    }
  });

  return styles;
}

module.exports = convertToObject;
