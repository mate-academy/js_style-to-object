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

  const styleObject = propertiesArray.reduce((acc, prop) => {
    const [key, value] = prop.split(':').map(part => part.trim());

    acc[key] = value;

    return acc;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
