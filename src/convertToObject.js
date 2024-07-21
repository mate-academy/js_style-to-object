'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}n
 */

function convertToObject(stylesString) {
  // Создаем массив правил, фильтруем пустые строки и преобразуем их в объект
  return stylesString
    .split(/;\s*/) // Разделяем строку на правила
    .filter((rule) => rule.trim()) // Фильтруем пустые строки
    .map((rule) => {
      const [property, value] = rule.split(/:\s*/);

      return {
        [property.trim()]: value.trim()
      };
    })
    .reduce((acc, curr) => {
      return Object.assign(acc, curr);
    }, {});
}
module.exports = convertToObject;
