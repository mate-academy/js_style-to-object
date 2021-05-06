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
  const stylesArrey = sourceString.split(';');
  const stylesObject = {};

  stylesArrey.forEach(item => {
    const tempArr = item.split(':');

    if (tempArr[0] !== undefined && tempArr[1] !== undefined) {
      const key = tempArr[0].trim();
      const property = tempArr[1].trim();

      stylesObject[key] = property;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
