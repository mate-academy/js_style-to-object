'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {

  return sourceString
    .split(';')
    .map(property => property.trim())
    .filter(property => property.length > 0)
    .reduce((resultObject, property) => {
      const [propertyName, value] = property.split(':')
        .map(propertyItem => propertyItem.trim());

      resultObject[propertyName] = value;

      return resultObject;
    }, {});
}

module.exports = convertToObject;
