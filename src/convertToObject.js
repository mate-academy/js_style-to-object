'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see
 * an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const stylesObject = {};

  styles.forEach(style => {
    const item = style.split(':');

    if (item.length === 2) {
      stylesObject[item[0].trim()] = item[1].trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
