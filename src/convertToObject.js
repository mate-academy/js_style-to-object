'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stringArray = sourceString.split(';');

  const declarations = stringArray.filter((element) => {
    return element.trim() !== '';
  });

  const stylesObject = declarations.reduce((accumulator, element) => {
    const parts = element.split(':');
    const property = parts[0].trim();
    const value = parts[1].trim();

    accumulator[property] = value;

    return accumulator;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
