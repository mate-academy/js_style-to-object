'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}n
 */
function convertToObject(stylesString) {
  // Создаем копию параметра, чтобы не изменять его
  const modifiedStylesString = stylesString
    .replace(/;+\s*$/, '') // Удаляет точки с запятой в конце строки
    .trim();

  const stylesObject = {};

  // Разделяем строки на отдельные правила
  const rules = modifiedStylesString.split(/;\s*/);

  rules.forEach((rule) => {
    // Пропускаем пустые строки
    if (rule.trim() === '') {
      return;
    }

    const [property, value] = rule.split(/:\s*/);

    if (property && value) {
      stylesObject[property.trim()] = value.trim();
    }
  });

  return stylesObject;
}
module.exports = convertToObject;
