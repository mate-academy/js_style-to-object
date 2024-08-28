'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // Крок 1: Очистка вхідного рядка
  const cleanedString = sourceString
    .replace(/;\s*$/, '') // Видаляємо останню крапку з комою

    .replace(/\s*:\s*/g, ':'); // Видаляємо зайві пробіли навколо двокрапки

  // Крок 2: Розділяємо рядок на окремі декларації
  const declarations = cleanedString.split(';');

  // Крок 3: Обробка кожної декларації
  return declarations.reduce((result, declaration) => {
    const [property, ...valueParts] = declaration.split(':');

    if (property.trim()) {
      // Перевірка, чи не є властивість порожньою
      result[property.trim()] = valueParts.join(':').trim();
    }

    return result;
  }, {});
}

module.exports = convertToObject;
