'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styles = sourceString
    .split(';')
    .map((style) => style.split(':')
      .map((value) => value.trim()));

  const stylesObj = {};

  styles.forEach(element => {
    const [property, value] = element;

    if (property !== '' && value !== '') {
      stylesObj[property] = value;
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
