'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let parts = sourceString
    .split(/[:;]/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  parts = parts.reduce((prev, part, i, self) => {
    if (i % 2 === 0) {
      const chave = part;
      const valor = self[i + 1];

      prev[chave] = valor;
    }

    return prev;
  }, {});

  return parts;
}

module.exports = convertToObject;
