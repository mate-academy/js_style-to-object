'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarationList = sourceString.split(';');
  const stylesObject = {};

  declarationList.forEach((element) => {
    const [key, value] = element.split(':');

    if (value !== undefined) {
      stylesObject[key.trim()] = value.trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
