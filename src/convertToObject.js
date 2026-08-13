'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .trim()
    .split(';')
    .filter((comand) => comand.includes(':'))
    .map((comandLine) => {
      const [property, value] = comandLine.split(':');

      return [property.trim(), value.trim()];
    })
    .reduce(
      (comandLine, [property, value]) => ({
        ...comandLine,
        [property]: value,
      }),
      {},
    );
}
module.exports = convertToObject;
