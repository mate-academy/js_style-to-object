'use strict';

function convertToObject(styles) {
  return styles
    .split(';') // Разбивает строку на массив по ;
    .map((rule) => rule.trim()) // Очищает пробелы вокруг
    .filter((rule) => rule) // пустые строки
    .reduce((acc, rule) => {
      const [property, ...valueParts] = rule.split(':');

      if (property && valueParts.length) {
        acc[property.trim()] = valueParts.join(':').trim();
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
