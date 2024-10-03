'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const array = sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style.length > 0);

  const styleObject = {};

  for (let i = 0; i < array.length; i++) {
    const style = array[i];

    // Separar a chave (propriedade) e o valor da declaração
    const [key, value] = style.split(':');

    if (key && value) {
      // Remover espaços extras da chave e do valor
      const cleanedKey = key.trim();
      const cleanedValue = value.trim();

      // Adicionar o par chave-valor ao objeto
      styleObject[cleanedKey] = cleanedValue;
    }
  }

  return styleObject;
}

module.exports = convertToObject;
