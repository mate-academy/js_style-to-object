'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  // Dividir a string em declarações separadas por ';'
  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    // Dividir cada declaração em chave e valor
    const [property, value] = declaration.split(':').map((part) => part.trim());

    // Adicionar ao objeto apenas se a propriedade e o valor forem válidos
    if (property && value) {
      styleObject[property] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
