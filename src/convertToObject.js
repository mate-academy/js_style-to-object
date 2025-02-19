'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString === '') {
    return {};
  }

  const styleObject = {};

  // Divide a string em linhas
  const lines = sourceString.split(';');

  // Itera sobre cada linha
  lines.forEach((line) => {
    // Verifica se a linha não está vazia e remove espaços se tiver espaços.
    if (line.trim()) {
      // Divide a linha em propriedade e valor com desestruturação
      // map com trim limpa property e value de possíveis espaços em branco
      const [property, value] = line.split(':').map((item) => item.trim());

      // Adiciona ao objeto se a propriedade e o valor forem válidos
      if (property && value) {
        styleObject[property] = value;
      }
    }
  });

  return styleObject;
}

module.exports = convertToObject;
