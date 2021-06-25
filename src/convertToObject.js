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
  // write your code here
  const convertedStyles = {};

  const splitedStyles = sourceString.split(';');

  const keysAndValues = splitedStyles.map(value => value.split(':'));

  const onlyWithNeededLength = keysAndValues.filter(
    value => value.length === 2);

  const deleteSpaces = propertie => {
    propertie[0] = propertie[0].trim();
    propertie[1] = propertie[1].trim();
  };

  onlyWithNeededLength.map(deleteSpaces);

  const addEntries = entry => {
    convertedStyles[entry[0]] = entry[1];
  };

  onlyWithNeededLength.forEach(addEntries);

  return convertedStyles;
}

module.exports = convertToObject;
