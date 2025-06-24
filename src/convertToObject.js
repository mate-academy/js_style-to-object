'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  // Розбиваємо по крапках з комою, щоб обробити кілька правил в одному рядку
  const lines = sourceString.split(';');

  for (const line of lines) {
    // Ігноруємо порожні або некоректні рядки
    if (line.includes(':')) {
      const parts = line.split(':');
      const key = parts[0].trim();
      const value = parts.slice(1).join(':').trim(); // підтримка значень з ":"

      if (key && value) {
        result[key] = value;
      }
    }
  }

  return result;
}

module.exports = convertToObject;
