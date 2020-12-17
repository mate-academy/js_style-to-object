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
  const stringArray = sourceString.split(';');
  const stylesObject = {};

  const arr = stringArray.map(arrElement => arrElement.trim())
    .filter(arrElement => arrElement.length > 0)
    .map(arrElement => arrElement.split(':'));

  arr.forEach(([key, value]) => {
    stylesObject[key.trim()] = value.trim();
  });

  return stylesObject;
}

module.exports = convertToObject;
