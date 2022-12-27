'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedStyle = {};
  const styles = sourceString.replace(/(\r\n|\n|\r)/gm, '').split(';');
  const newStyles = styles.map(a => a.trim()).filter(a => a !== '');

  for (const style of newStyles) {
    convertedStyle[style.split(':')[0].trim()] = style.split(':')[1].trim();
  }

  return convertedStyle;
}

module.exports = convertToObject;
