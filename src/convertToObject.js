'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const rules = sourceString
    .split(';') // Divide as regras por ponto e vírgula
    .filter((rule) => rule.trim() !== ''); // Remove regras vazias

  for (const rule of rules) {
    const [property, ...valueParts] = rule.split(':');
    const value = valueParts.join(':').trim();

    if (property && value) {
      result[property.trim()] = value; // Mantém as quebras de linha no valor
    }
  }

  return result;
}

module.exports = convertToObject;
