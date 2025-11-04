'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const secoes = sourceString.split(';'); // divide pelos espaços ' '
  const tratamentoDeLimpeza = secoes
    .map((partes) => partes.trim()) // tira espaços vazios de cada parte
    .filter((index) => index !== ''); // tira os espaços do arry

  const objetoFormatado = {};

  tratamentoDeLimpeza.forEach((elemento) => {
    // pega cada elemento do arry e divide nos ':'
    const partes = elemento.split(':');
    // tira todos os espaços antes e depois de cada elemento do arry
    const chave = partes[0].trim();
    const valor = partes[1].trim();
    // adiciona ao obj a chave e valor já formatados

    objetoFormatado[chave] = valor;
  });

  return objetoFormatado;
}

module.exports = convertToObject;
