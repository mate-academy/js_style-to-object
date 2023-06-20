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
  const stylesArray = sourceString
    .split(';')
    .filter((elem) => elem !== '');

  const styleObject = stylesArray.reduce((obj, style) => {
    const [property, value] = style
      .split(':')
      .map(str => str.trim());

    if (property && value) {
      obj[property] = value;
    }

    return obj;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
