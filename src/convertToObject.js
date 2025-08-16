'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  // Primeiro, tratar casos de múltiplas regras em uma linha
  const rules = sourceString.split(';');

  for (const rule of rules) {
    // Remover espaços em branco e quebras de linha
    const trimmedRule = rule.trim();

    // Ignorar regras vazias
    if (!trimmedRule) continue;

    // Dividir a regra em propriedade e valor
    const colonIndex = trimmedRule.indexOf(':');

    if (colonIndex === -1) continue;

    // Extrair propriedade e valor
    let property = trimmedRule.substring(0, colonIndex).trim();
    let value = trimmedRule.substring(colonIndex + 1).trim();

    // Se o valor terminar com ; (pode acontecer em alguns casos)
    if (value.endsWith(';')) {
      value = value.substring(0, value.length - 1).trim();
    }

    // Adicionar ao objeto resultante
    if (property && value) {
      // Se a propriedade já existe, juntar os valores com quebra de linha
      if (result[property]) {
        result[property] += '\n' + value;
      } else {
        result[property] = value;
      }
    }
  }

  return result;
}

module.exports = convertToObject;
