'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';') // separa pelas declarações
    .map((line) => line.trim()) // remove espaços extras
    .filter((line) => line.length > 0) // ignora vazios
    .reduce((style, declaration) => {
      const [property, ...valueParts] = declaration.split(':');

      if (!property || valueParts.length === 0) {
        return style;
      } // ignora inválidos

      const key = property.trim();
      const value = valueParts.join(':').trim(); // junta caso valor tenha ":"

      if (key && value) {
        style[key] = value;
      }

      return style;
    }, {});
}

module.exports = convertToObject;
