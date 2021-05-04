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
  let properties = sourceString.split(';').map(property => property.trim());

  properties = properties.filter(property => property.length > 0);

  properties = properties.map(property =>
    `${property.split(':')[0].trim()}:${property.split(':')[1].trim()}`);

  properties.forEach(
    property => {
      object[property.split(':')[0]] = property.split(':')[1];
    }
  );

  return object;
}

module.exports = convertToObject;
