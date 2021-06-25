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

  const splitedStyles = sourceString.split(';');

  const keysAndValues = splitedStyles.map(value => value.split(':'));

  const onlyWithNeededLength = keysAndValues.filter(
    value => value.length === 2);

  const deleteSpacesAndAddProperties = (convertedStyles, value) => {
    convertedStyles[value[0].trim()] = value[1].trim();

    return convertedStyles;
  };

  return onlyWithNeededLength.reduce(deleteSpacesAndAddProperties, {});
}

module.exports = convertToObject;
