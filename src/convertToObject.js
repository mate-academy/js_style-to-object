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
  const cssFile = sourceString.split(';')
    .map(property => property.trim())
    .filter(property => property.length > 0)
    .map(property => property.split(':')
      .map(propertyWithoutSpace => propertyWithoutSpace.trim()));
  const cssPropertiesObject = {};

  for (let i = 0; i < cssFile.length; i++) {
    cssPropertiesObject[cssFile[i][0]] = cssFile[i][1];
  }

  return cssPropertiesObject;
}

module.exports = convertToObject;
