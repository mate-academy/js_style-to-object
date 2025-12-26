'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split(';')
    .map((styleRule) => styleRule.trim())
    .filter((styleRule) => styleRule !== '')
    .reduce((stylesAccumulator, styleRule) => {
      const colonIndex = styleRule.indexOf(':');

      const propertyName = styleRule.slice(0, colonIndex).trim();
      const propertyValue = styleRule.slice(colonIndex + 1).trim();

      // Використовуємо spread-оператор, щоб не мутувати акумулятор
      return {
        ...stylesAccumulator,
        [propertyName]: propertyValue,
      };
    }, {});
}
module.exports = convertToObject;
