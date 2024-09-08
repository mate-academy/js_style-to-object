'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // Rozdzielamy ciąg na linie, usuwamy puste linie
  // i linie zawierające tylko białe znaki
  const lines = sourceString.split(';').filter((line) => line.trim());

  // Używamy reduce do przekształcenia tablicy linii w obiekt stylów
  return lines.reduce((stylesObject, line) => {
    // Używamy wyrażenia regularnego do wyodrębnienia klucza i wartości z linii
    const match = line.match(/^\s*([^:]+?)\s*:\s*([\s\S]+?)\s*$/);

    if (match) {
      const [, property, value] = match;

      stylesObject[property] = value;
    }

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
