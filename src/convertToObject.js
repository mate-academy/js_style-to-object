'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  // Регулярний вираз для пошуку всіх "ключ: значення" пар
  const regex = /([^:;]+):([^;]+)/g;
  let match;

  // Використовуємо regex для пошуку всіх пар "ключ: значення"
  while ((match = regex.exec(sourceString)) !== null) {
    const key = match[1].trim();
    const value = match[2].trim();

    if (key && value) {
      styleObject[key] = value;
    }
  }

  return styleObject;
}

module.exports = convertToObject;
