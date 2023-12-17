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

  for (const index in arrOfProperties) {
    let elem = arrOfProperties[index];

    while (elem.startsWith('/n')) {
      elem = elem.slice(0, 2);
    }
    arrOfProperties[index] = elem.trim();
  }

  const validProps = arrOfProperties.filter((prop) => prop.length !== 0);

  validProps.forEach((elem) => {
    const singleProp = elem.split(':');
    // remove extra spaces
    const propName = singleProp[0].trim();
    const propValue = singleProp[1].trim();

    // add props to object
    result[propName] = propValue;
  });

  return result;
}

module.exports = convertToObject;
