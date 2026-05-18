'use strict';

/**
 * @param {string} styles
 *
 * @returns {object}
 */
function convertToObject(styles) {
  // Se a string estiver vazia ou for apenas espaços, retornamos um objeto vazio
  if (!styles || !styles.trim()) {
    return {};
  }

  const styleObject = {};

  styles
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.length > 0)
    .forEach((declaration) => {
      // Dividimos a declaração no primeiro ':' para separar chave e valor
      const colonIndex = declaration.indexOf(':');

      // Se não houver ':', ignoramos a linha inválida
      if (colonIndex !== -1) {
        const propertyName = declaration.slice(0, colonIndex).trim();
        const propertyValue = declaration.slice(colonIndex + 1).trim();

        styleObject[propertyName] = propertyValue;
      }
    });

  return styleObject;
}

module.exports = convertToObject;
