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
  const strings = sourceString
    .trim()
    .split(';')
    .map(property => {
      return property
        .split(':')
        .map(prop => prop.trim());
    });

  const listOfProperties = strings.filter(property => property.length > 1);

  const properties = listOfProperties.reduce((styles, property) => {
    styles[property[0]] = property[1];

    return styles;
  }, {});

  return properties;
}

module.exports = convertToObject;
