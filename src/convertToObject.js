'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // eslint-disable-next-line max-len, no-unused-vars
  let object = {};
  const callback = (prev, property) => {
    return {
      ...prev,
      [property[0].trim()]: property[1].trim(),
    };
  };
  const arrayOfProperties = sourceString.split(';').map(prop => {
    return prop.trim();
  }).filter(prop => {
    return prop.length !== 0;
  }).map(prop => prop.split(':'));

  object = arrayOfProperties.reduce(callback, object);

  return object;
}

module.exports = convertToObject;
