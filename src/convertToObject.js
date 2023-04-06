'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string
 * with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values
 * of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const stylesObject = {};

  for (let i = 0; i < styles.length; i++) {
    const style = styles[i].split(':');

    if (style[0].trim() !== '') {
      stylesObject[style[0].trim()] = style[1].trim();
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
