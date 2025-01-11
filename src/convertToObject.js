'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  // Видалення зайвих пробілів та порожніх рядків
  const trimmedString = sourceString.trim();

  // Розбиваємо рядок на декларації за допомогою крапки з комою
  const rules = trimmedString.split(';');

  const result = {};
  // Обробляємо кожне правило

  rules.forEach((rule) => {
    const trimmedRule = rule.trim();
    // Очищаємо зайві пробіли з початку та кінця кожного правила

    if (trimmedRule) {
      // Перевіряємо, чи не порожній рядок
      // Розбиваємо на властивість та значення
      const [property, value] = trimmedRule
        .split(':')
        .map((item) => item.trim());

      if (property && value) {
        result[property] = value; // Додаємо до об'єкта
      }
    }
  });

  return result;
}

module.exports = convertToObject;
