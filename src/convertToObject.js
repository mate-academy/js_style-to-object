'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = sourceString
    // Quebra a string em possíveis declarações usando ';' como separador
    .split(';')
    // Remove linhas vazias e espaços extras
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration && declaration.includes(':'))
    // Transforma cada declaração em um par [key, value]
    .map((declaration) => {
      const [key, ...valueParts] = declaration.split(':');
      const value = valueParts.join(':').trim();

      return [key.trim(), value];
    })
    // Constrói o objeto final
    .reduce((acc, [key, value]) => {
      acc[key] = value;

      return acc;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
