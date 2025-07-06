'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObject = {};

  // Розділяємо по крапці з комою; перенос рядків не розділяємо
  const parts = sourceString.split(';');

  parts.forEach((part) => {
    const cleanLine = part.trim();

    // Пропустити порожні або неправильні рядки
    if (!cleanLine || !cleanLine.includes(':')) {
      return;
    }

    const index = cleanLine.indexOf(':');
    const key = cleanLine.slice(0, index).trim();
    const value = cleanLine.slice(index + 1).trim();

    newObject[key] = value;
  });

  return newObject;
}

module.exports = convertToObject;
