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
  const styles = sourceString.trim().split(';');
  const styleObj = {};

  for (let i = 0; i < styles.length; i++) {
    const style = styles[i].trim();

    if (style) {
      const [property, value] = style.split(':');

      styleObj[property.trim()] = value.trim();
    }
  }

  return styleObj;
}

module.exports = convertToObject;
