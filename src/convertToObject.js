'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const valuesWithOutBlank = sourceString.split(';').map(
    element => {
      return element.split(':');
    });

  return valuesWithOutBlank.reduce(
    (acumulator, element) => {
      const result = { };

      if (element[1] === undefined) {
        return { ...acumulator };
      }

      result[`${element[0].trim()}`] = element[1].trim();

      return {
        ...acumulator,
        ...result,
      };
    }, {});
}

module.exports = convertToObject;
