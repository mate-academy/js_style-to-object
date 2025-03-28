'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  // Dividir a entrada em linhas por ponto e vírgula
  const styleLines = sourceString
    .split(';')
    .filter((styleLine) => styleLine.trim() !== '');

  // Criar o objeto resultado
  const result = {};

  // Processar cada linha
  styleLines.forEach((styleLine) => {
    // Dividir a linha em chave e valor
    const [key, value] = styleLine.split(':').map((part) => part.trim());

    // Adicionar ao objeto, se a chave e o valor forem válidos
    if (key && value) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
