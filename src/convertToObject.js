'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';') // Разделяем стили по `;`
    .map((style) => style.trim()) // Убираем пробелы по краям
    .filter((style) => style) // Убираем пустые строки
    .reduce((styleMap, style) => {
      const [key, value] = style
        .split(':') // Разбиваем по `:` и чистим пробелы
        .map((part) => part.trim());

      if (key && value) {
        styleMap[key] = value; // Записываем в объект
      }

      return styleMap;
    }, {});
}

module.exports = convertToObject;
