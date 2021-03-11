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
  const stylesObject = {};
  const sourceStringArray = sourceString.split('\n');
  const propertyArray = [];

  for (let i = 0; i < sourceStringArray.length; i++) {
    propertyArray.push(sourceStringArray[i].split(':'));
  }

  for (let i = 0; i < propertyArray.length; i++) {
    if (propertyArray[i][1] !== undefined) {
      stylesObject[propertyArray[i][0].trim()]
        = propertyArray[i][1].slice(0, -1).trim();
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
