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
  const obj = {};
  let properties = sourceString.split(';');

  properties = properties.map((property) => property.split(':'));

  properties = properties.map(
    (property) => property.map((str) => str.trim()));

  properties = properties.filter(
    (property) => property.every((str) => str.length !== 0));

  properties.forEach(
    (property) => {
      obj[property[0]] = property[1];
    }
  );

  return obj;
}

module.exports = convertToObject;
