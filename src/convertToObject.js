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
  const uniqueProperties = new Set(sourceString.split(';'));

  uniqueProperties.delete('\n');
  uniqueProperties.delete('\n  ');
  uniqueProperties.delete('\n\n  ');

  const filteredProperties = [...uniqueProperties];

  return filteredProperties.map(property => property.split(':')
    .map(el => el.trim()))
    .reduce((objectConvert, pair) => {
      return Object.assign(objectConvert, { [pair[0]]: pair[1] });
    }, {});
}

module.exports = convertToObject;
