'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of
 * related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.trim().split(';');
  const resultObject = {};

  styles.forEach((style) => {
    const [property, value] = style.split(':').map((el) => el.trim());

    if (property && value) {
      resultObject[property] = value;
    }
  });

  return resultObject;
}

module.exports = convertToObject;
