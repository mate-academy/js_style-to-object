'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(/:|;/);
  const stylesObject = {};

  for (let i = 0; i < stylesArray.length - 1; i += 2) {
    const stylesObjectKey = stylesArray[i].trim();
    const stylesObjectValue = stylesArray[i + 1].trim();
    stylesObject[stylesObjectKey] = stylesObjectValue;
  }

  return stylesObject;
}

module.exports = convertToObject;
