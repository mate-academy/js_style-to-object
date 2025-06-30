'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const separatedByItem = sourceString.split(';');
  const finalResult = {};

  for (let i = 0; i < separatedByItem.length; i++) {
    const currentItem = separatedByItem[i];

    /* pega e retira os espaços a mais no inicio e fim */
    const trimmedItem = currentItem.trim();

    /* verifica se a string está vazia apos tirar espacos */
    if (!trimmedItem) {
      continue;
    }

    /* acha o indice que a atual string após
      as modificações termina o item para chave
       a partir do ':'
    */
    const indexWhereWordEnds = trimmedItem.indexOf(':');

    /* pula essa verificacao caso não haja o : na string */
    if (indexWhereWordEnds === -1) {
      continue;
    }

    /* damos o valor para a chave tendo como ponto final o index do ':' */
    const key = trimmedItem.slice(0, indexWhereWordEnds).trim();

    /* damos o valor para a valor tendo como ponto de início o index do ':' */
    const value = trimmedItem.slice(indexWhereWordEnds + 1).trimStart();

    if (key) {
      finalResult[key] = value;
    }
  }

  return finalResult;
}

module.exports = convertToObject;
