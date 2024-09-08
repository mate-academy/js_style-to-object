'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // Rozdzielamy ciąg na linie, usuwamy puste linie i linie zawierające tylko białe znaki
  const lines = sourceString.split(';').filter((line) => line.trim());

  // Używamy reduce do przekształcenia tablicy linii w obiekt stylów
  const stylesObject = lines.reduce((accumulator, line) => {
    // Używamy wyrażenia regularnego do wyodrębnienia klucza i wartości z linii
    const match = line.match(/^\s*([^:]+?)\s*:\s*(.+)\s*$/);

    if (match) {
      const [, property, value] = match;

      accumulator[property] = value;
    }

    return accumulator;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
