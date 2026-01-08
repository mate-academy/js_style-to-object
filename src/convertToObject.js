'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';') // Розбиваю рядок по ;
    .map((line) => line.trim()) // Прибираю зайві пробіли в рядку
    .filter(Boolean) // Прибираю порожні рядки
    .forEach((line) => {
      const [key, ...rest] = line.split(':');
      // Розбиття рядка на ключ і решту (значення)

      if (!key || rest.length === 0) {
        return;
      } // Якщо немає ключа, або значення то пропуск

      const value = rest.join(':').trim();

      result[key.trim()] = value;
    });

  return result;
}

module.exports = convertToObject;
