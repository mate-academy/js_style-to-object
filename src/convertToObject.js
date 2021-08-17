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
  const filteredProperties = sourceString.split(';')
    .map(property => property.trim())
    .filter(property => property.length);

  return filteredProperties.map(property => property.split(':')
    .map(el => el.trim()))
    .reduce((objectConvert, pair) => {
      return Object.assign(objectConvert, { [pair[0]]: pair[1] });
    }, {});
}

module.exports = convertToObject;
