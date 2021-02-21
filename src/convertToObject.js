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
  const object = {};
  const arrayOfProperties = sourceString.split(';')
    .map(el => el.trim()).filter(element => element !== '');
  const property = arrayOfProperties.map(el => el.split(':'));
  const trimmedValues = property.map(el => el[1].trim());
  const trimmedKeys = property.map(el => el[0].trim());

  for (let i = 0; i < trimmedValues.length; i++) {
    object[trimmedKeys[i]] = trimmedValues[i];
  }

  return object;
}

module.exports = convertToObject;
