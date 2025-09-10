'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  // Dzielimy tekst po średnikach
  const parts = sourceString.split(';');

  for (let i = 0; i < parts.length; i++) {
    const declaration = parts[i].trim();

    // Pomijamy puste linie lub same średniki
    if (declaration === '') {
      continue;
    }

    // Znajdujemy pierwsze wystąpienie dwukropka
    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    // Podział na klucz i wartość
    const key = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    if (key && value) {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
