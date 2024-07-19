'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};

  const noSpacesArray = sourceString.split(';');
  const arrayOfArrays = noSpacesArray
    .map((element) => element.split(':'))
    .filter((element) => element.length === 2)
    .map((element) => [element[0].trim(), element[1].trim()]);

  arrayOfArrays.forEach((element) => {
    cssObject[element[0]] = element[1];
  });

  return cssObject;
}

module.exports = convertToObject;
