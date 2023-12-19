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
  const result = {};
  const arrOfProperties = sourceString.split(';');

  for (let index = 0; index < arrOfProperties.length; index++) {
    const prop = arrOfProperties[index];

    while (prop.startsWith('/n')) {
      prop.replace('/n', '..');
    }
    arrOfProperties[index] = prop.trim();
  }

  const validProps = arrOfProperties.filter((prop) => prop);

  validProps.forEach((prop) => {
    const singleProp = prop.split(':');
    // remove extra spaces
    const propName = singleProp[0].trim();
    const propValue = singleProp[1].trim();

    // add props to object
    result[propName] = propValue;
  });

  return result;
}

module.exports = convertToObject;
