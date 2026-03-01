'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (!sourceString) {
    return result;
  } // порожній рядок

  sourceString
    .split(';') // розділяємо по крапці з комою
    .map((rule) => rule.trim()) // прибираємо пробіли навколо
    .filter((rule) => rule) // ігноруємо пусті рядки
    .forEach((rule) => {
      const [property, ...valueParts] = rule.split(':');

      if (!property || valueParts.length === 0) {
        return;
      }

      const key = property.trim();
      const value = valueParts.join(':').trim();

      result[key] = value;
    });

  return result; // ОБОВ'ЯЗКОВО
}

module.exports = convertToObject;
