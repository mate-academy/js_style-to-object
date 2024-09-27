'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfValues = sourceString.split(';');
  const stylesObject = {};

  arrayOfValues.forEach(value => {
    const valueArr = value.split(':').map(string => string.trim());

    if (valueArr.length > 1) {
      stylesObject[valueArr[0]] = valueArr[1];
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
