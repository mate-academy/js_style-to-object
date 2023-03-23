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
  const stylesArray = sourceString.trim().split(';');
  const stylesObject = {};
  const style = stylesArray.map(x => x.trim());

  style.forEach(prop => {
    const [key, value] = prop.split(':').map(x => x.trim());

    if (key !== '') {
      stylesObject[key] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
