'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertyList = sourceString.split(';')
    .map(property => property.split(':')
      .map(item => item.trim()))
    .filter(string => string.length === 2);
  const styles = {};

  propertyList.forEach((property) => {
    styles[property[0]] = property[1];
  });

  return styles;
}

module.exports = convertToObject;
