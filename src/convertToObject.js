'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  // Розбиваємо по крапці з комою – це кінець CSS-властивості
  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    const trimmed = declaration.trim();

    if (!trimmed || !trimmed.includes(':')) {
      return;
    }

    const [key, ...rest] = trimmed.split(':');
    const value = rest.join(':').trim();

    result[key.trim()] = value;
  });

  return result;
}

module.exports = convertToObject;
