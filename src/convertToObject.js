'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function ConvertToObject(cssString) {
  // Инициализируем объект, в который будем добавлять стили
  const obj = {};

  // Регулярное выражение для поиска пар ключ-значение в CSS строке
  const pattern = /([^:;]+)\s*:\s*([^;]+)/g;

  // Ищем все вхождения пар ключ-значение в строке
  let match;
  const array = cssString.split(';');

  for (const el of array) {
    const arr = el.split(':');

    obj[arr[0].trim()] = arr[1].trim();
  }

  return stylesObject;
}

module.exports = convertToObject;
