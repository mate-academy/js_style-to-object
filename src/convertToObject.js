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
  // let's divide the whole rule into group of properties
  const ruleSplitted = sourceString.split(';');

  // 1) let's divide each property into property-name and property-value
  // 2) we don't save blank elements (they are not correct properties)
  const propertiesSplitted = ruleSplitted
    .map(property => property.split(':'))
    .filter(property => (property.length === 2));

  // let's remove side spaces (we need property name and value only)
  const propertiesSplittedFormatted = propertiesSplitted.map(property => (
    property.map(propertyPart => propertyPart.trim())
  ));

  const styles = {};

  // each property-name is a key and property-value is the key's value
  for (const property of propertiesSplittedFormatted) {
    styles[property[0]] = property[1];
  }

  return styles;
}

module.exports = convertToObject;
