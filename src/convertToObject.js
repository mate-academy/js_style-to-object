'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  // Разделяем строку по точкам с запятой на отдельные CSS-объявления
  const declarations = sourceString.split(';');

  for (let declaration of declarations) {
    declaration = declaration.replace(/\u00a0/g, ' ').trim();

    // Пропускаем пустые строки
    if (!declaration) {
      continue;
    }

    // Находим двоеточие, которое разделяет ключ и значение
    const colonIndex = declaration.indexOf(':');

    if (colonIndex !== -1) {
      const key = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      if (key) {
        result[key] = value;
      }
    }
  }

  return result; // write your code here
}

module.exports = convertToObject;
