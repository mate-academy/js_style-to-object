'use strict';

/**
 * Converte uma string de estilos CSS em um objeto JavaScript.
 *
 * @param {string} sourceString - String contendo declarações CSS
 * (ex: "color: red; font-size: 14px;")
 *
 * @return {object} Objeto com propriedades CSS como chaves e seus valores
 * (ex: { color: 'red', 'font-size': '14px' })
 */
function convertToObject(sourceString) {
  return (
    sourceString
      // Separa cada declaração CSS pelo ponto-e-vírgula
      .split(';')

      // Remove espaços, tabs e quebras de linha
      // no início/fim de cada declaração
      .map((declaration) => declaration.trim())

      // Mantém apenas declarações válidas
      // (que possuem ":" separando propriedade:valor)
      // Isso também remove strings vazias e ponto-e-vírgulas extras
      .filter((declaration) => declaration.includes(':'))

      // Transforma o array de declarações em um objeto
      .reduce((stylesObject, declaration) => {
        // Encontra o primeiro ":" para separar propriedade do valor
        // Usamos indexOf para preservar ":" que podem existir dentro do valor
        // Ex: "background: url(http://example.com)" -> valor contém ":"
        const colonIndex = declaration.indexOf(':');

        // Extrai a propriedade (antes do ":") e remove espaços extras
        const property = declaration.slice(0, colonIndex).trim();

        // Extrai o valor (depois do ":") e remove espaços extras
        const value = declaration.slice(colonIndex + 1).trim();

        // Adiciona a propriedade e valor ao objeto de estilos
        stylesObject[property] = value;

        return stylesObject;
      }, {})
  );
}

module.exports = convertToObject;
