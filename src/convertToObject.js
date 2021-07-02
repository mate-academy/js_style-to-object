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
  let properties = sourceString.split(';');
  const sourceObject = {};

  properties = properties.map(property => property.split(':'));
  properties = properties.filter(property => property.length > 1);

  properties.map(property => {
    return (sourceObject[property[0].trim()] = property[1].trim());
  });

  return sourceObject;
}

module.exports = convertToObject;
