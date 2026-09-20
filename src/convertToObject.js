'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  // Звертаємо увагу на порожні рядки або рядки, що містять лише пробіли
  if (!sourceString || !sourceString.trim()) {
    return result;
  }

  // Розділяємо рядок на окремі CSS-правила за символом крапки з комою `;`
  const stylesList = sourceString.split(';');

  for (const style of stylesList) {
    const trimmedStyle = style.trim();

    // Ігноруємо порожні елементи (наприклад, після останнього `;`)
    if (!trimmedStyle) {
      continue;
    }

    const colonIndex = trimmedStyle.indexOf(':');

    if (colonIndex !== -1) {
      const key = trimmedStyle.slice(0, colonIndex).trim();
      const value = trimmedStyle.slice(colonIndex + 1).trim();

      if (key) {
        result[key] = value;
      }
    }
  }

  return result;
}

module.exports = convertToObject;
