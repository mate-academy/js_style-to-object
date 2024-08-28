'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  // Крок 1: Очистка вхідного рядка
  const cleanedString = sourceString
    .replace(/[\n\r]/g, '') // Видаляємо символи нового рядка
    .replace(/\s*;\s*/g, ';') // Видаляємо зайві пробіли навколо крапок з комою
    .replace(/;\s*$/, ''); // Видаляємо останню крапку з комою

  // Крок 2: Розділяємо рядок на окремі декларації
  const declarations = cleanedString.split(';');

  // Крок 3: Обробка кожної декларації
  declarations.forEach((declaration) => {
    const [property, ...valueParts] = declaration.split(':');

    if (property) {
      const value = valueParts.join(':').trim();

      // Повертаємо пробіли на місце після розбиття на рядки
      result[property.trim()] = value.replace(/,\s*/g, ',\n          ');
    }
  });

  return result;
}

module.exports = convertToObject;
