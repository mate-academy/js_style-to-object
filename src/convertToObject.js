'use strict';

/**
 * Конвертує CSS-рядок у об'єкт стилів.
 *
 * @param {string} styleString — CSS-рядок типу "color: red; font-size: 14px;"
 * @returns {object} Об'єкт зі стилями
 */
function convertToObject(styleString) {
  const result = {};

  if (!styleString || typeof styleString !== 'string') {
    return result;
  }

  styleString
    .split(';')
    .map((rule) => rule.trim())
    .filter(Boolean)
    .forEach((rule) => {
      const [property, ...valueParts] = rule.split(':');

      if (property && valueParts.length > 0) {
        const key = property.trim();
        const value = valueParts.join(':').trim(); // важливо,  може містити ":"

        result[key] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
