'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  // Разбиваемо строку
  const strings = sourceString.split(';');

  strings.forEach((rawStr) => {
    // Видаляемо пробіли
    const str = rawStr.trim();

    // Не учитуемо пусті строки
    if (!str) {
      return;
    }

    // Находимо позицію першого двоєточія
    const colonIndex = str.indexOf(':');

    // Якщо : найдено, разбиваем на свойство и значення
    if (colonIndex !== -1) {
      const property = str.slice(0, colonIndex).trim();
      const value = str.slice(colonIndex + 1).trim();

      // Добавляемо свойство та значення у результат
      if (property && value) {
        result[property] = value;
      }
    }
  });

  return result;
}

module.exports = convertToObject;
