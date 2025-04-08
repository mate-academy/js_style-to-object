'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // Якщо рядок порожній, повертаємо порожній об'єкт
  if (sourceString.trim() === '') {
    return {};
  }

  const result = {};

  // Розбиваємо рядок на стилі за допомогою символу ";"
  sourceString
    .split(';')
    .map((style) => style.trim()) // Очищаємо зайві пробіли
    .filter(Boolean) // Фільтруємо порожні елементи
    .forEach((style) => {
      // Розділяємо стиль на ключ і значення
      const [key, value] = style.split(':').map((item) => item.trim());

      // Перевірка на випадки з зайвими пробілами чи символами
      if (key && value) {
        result[key] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
