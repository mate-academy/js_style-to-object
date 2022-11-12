'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const array = sourceString
    .split(';')
    .map((element) => element.trim())
    .filter((element) => element.length > 0);

  const stylesObj = {};

  array.map((element) => {
    const propertyAndValue = element.split(':');

    return (stylesObj[propertyAndValue[0].trim()] = propertyAndValue[1].trim());
  });

  return stylesObj;
}

module.exports = convertToObject;
