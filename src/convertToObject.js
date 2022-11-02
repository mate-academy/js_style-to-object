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
  const propertiesArray = sourceString.split(';');
  let cssProperties = {};

  for (const property of propertiesArray) {
    const pairOfInternals = property.split(':');

    if (pairOfInternals[0] && pairOfInternals[1]) {
      const prop = pairOfInternals[0].trim();
      const value = pairOfInternals[1].trim();
      const objOfInternals = {
        [prop]: value,
      };

      cssProperties = Object.assign(cssProperties, objOfInternals);
    }
  }

  return cssProperties;
}

module.exports = convertToObject;
