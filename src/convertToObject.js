'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrOfArrs = [];
  const resultingObject = {};

  sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.length > 0)
    .forEach((declarationPart) => {
      arrOfArrs.push(declarationPart.split(':'));
    });

  arrOfArrs
    .map((declarationArray) => {
      return declarationArray.map((declarationPart) => declarationPart.trim());
    })
    .forEach(([key, value]) => (resultingObject[key] = value));

  return resultingObject;
}

module.exports = convertToObject;
