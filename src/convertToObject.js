'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertiesArray = sourceString.split(';')
    .map(prop => prop.replace('\n', '').trim())
    .filter(prop => prop);
  const keysArray = propertiesArray
    .map(prop => prop.slice(0, prop.indexOf(':')).trim());
  const valuesArray = propertiesArray
    .map(prop => prop.slice(prop.indexOf(':') + 1, prop.length).trim());
  const propertiesObjectsArray = keysArray
    .map((key, idx) => ({ [key]: valuesArray[idx] }));
  const styleObject = Object.assign(...propertiesObjectsArray);

  return styleObject;
}

module.exports = convertToObject;
