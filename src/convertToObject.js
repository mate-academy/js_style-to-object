'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object
 * where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const stylesInString = sourceString
    .split(';')
    .map(item => item.trim())
    .filter(item => item.length !== 0);

  stylesInString.forEach((prop) => {
    const current = prop
      .split(':')
      .map(item => item.trim());

    const [key, value] = current;

    styles[key] = value;
  });

  return styles;
}

module.exports = convertToObject;
