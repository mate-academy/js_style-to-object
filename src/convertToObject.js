'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  // Rozdzielamy ciąg na linie, usuwamy puste linie i linie zawierające tylko białe znaki
  const lines = sourceString.split(';').filter(line => line.trim());

  lines.forEach(line => {
    // Rozdzielamy nazwę właściwości i wartość
    const [property, value] = line.split(':');

    if (property && value) {
      // Usuwamy niepotrzebne spacje i dodajemy do obiektu
      const cleanedProperty = property.trim();
      const cleanedValue = value.trim();
      stylesObject[cleanedProperty] = cleanedValue;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
