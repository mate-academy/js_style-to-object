'use strict';

/**
 * Implement convertToObject function:
 *
  * Function takes a string with s
  * tyles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesSet = {};

  const styles = sourceString.split(';');

  styles.forEach(style => {
    if (style.includes(':')) {
      const stuff = style.split(':');
      const property = stuff[0].trim();
      const value = stuff[1].trim();

      stylesSet[property] = value;
    }
  });

  return stylesSet;
}

module.exports = convertToObject;
