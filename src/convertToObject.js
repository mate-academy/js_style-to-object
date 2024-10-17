'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((declaration) => declaration.trim().length > 0)
    .map((declaration) => {
      const [property, value] = declaration
        .split(':')
        .map((item) => item.trim());

      // Залишити властивість з дефісами
      return { [property]: value };
    })
    .reduce((accumulator, current) => Object.assign(accumulator, current), {});
}

module.exports = convertToObject;
