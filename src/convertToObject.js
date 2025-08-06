'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  sourceString
    .split(';') // Separar por cada declaración CSS
    .map((line) => line.trim()) // Eliminar espacios al principio y al final
    .filter((line) => line.includes(':')) // Ignorar líneas vacías o inválidas
    .forEach((declaration) => {
      const [property, ...valueParts] = declaration.split(':');
      const key = property.trim();
      const value = valueParts.join(':').trim(); // Unirporsihay":"enelvalor

      result[key] = value;
    });

  return result;
}

module.exports = convertToObject;
