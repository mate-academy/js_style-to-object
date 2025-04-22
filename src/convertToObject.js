'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rules = sourceString.split(';');
  const trimmedRules = rules.map((rule) => rule.trim());
  const propertyValuePairs = trimmedRules
    .filter((rule) => rule !== '') // Фільтруємо порожні правила
    .map((rule) => rule.split(':'));
  const styleObjects = propertyValuePairs
    .filter((pair) => pair.length === 2) // Фільтруємо некоректні правила
    .map((pair) => ({ [pair[0].trim()]: pair[1].trim() }));

  // Об'єднуємо масив об'єктів в один об'єкт
  return styleObjects.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}

module.exports = convertToObject;
