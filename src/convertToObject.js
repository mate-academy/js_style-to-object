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
  const obj = {};
  const styles = sourceString.split(';');

  for (let i = 0; i < styles.length; i++) {
    const style = styles[i].trim();

    if (style.length === 0) {
      continue;
    }

    const [property, value] = style.split(':');

    obj[property.trim()] = value.trim();
  }

  return obj;
}

module.exports = convertToObject;
