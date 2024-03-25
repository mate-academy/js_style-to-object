'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObj = {};

  const elementsArr = sourceString.split(';');

  const trimedStrs = elementsArr.map((elem) => elem.trim());

  const noSpacesArr = trimedStrs.filter((el) => el !== '');

  noSpacesArr.forEach((elem) => {
    const spreadElement = elem.split(':');

    const cssObjKey = spreadElement[0].trim();
    const cssObjValue = spreadElement[1].trim();

    cssObj[cssObjKey] = cssObjValue;
  });

  return cssObj;
}

module.exports = convertToObject;
