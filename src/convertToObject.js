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
  const noNewlines = sourceString.split(';')
    .map(property => property.trim())
    .filter(property => property !== '');
  const propertyAndValue = noNewlines
    .map(property => property
      .split(':'));
  const noSpaces = propertyAndValue
    .map(property => property
      .map(item => item.trim()));

  const putPropertiesIntoObject = noSpaces
    .reduce((accum, property) => {
      return {
        ...accum,
        [property[0]]: property[1],
      };
    }, {});

  return putPropertiesIntoObject;
}

module.exports = convertToObject;
