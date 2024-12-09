'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const res = {};

  const estilos = sourceString.split(';').filter(checkEmpty);

  estilos.forEach((estilo) => {
    const [key, value] = estilo.split(':');

    res[key.trim()] = value.trim();
  });

  return res;
}

function checkEmpty(linha) {
  return linha.trim() !== '';
}

module.exports = convertToObject;
