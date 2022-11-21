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
  const properties = sourceString
    .split(';')
    .map(property => property.trim())
    .filter(property => property.length > 0);

  const callback = (prev, property) => {
    return {
      ...prev,
      [property.slice(0, property.indexOf(':')).trim()]:
        property.slice(property.indexOf(':') + 1).trim(),
    };
  };

  const stylesObject = properties.reduce(callback, {});

  return stylesObject;
}

module.exports = convertToObject;
