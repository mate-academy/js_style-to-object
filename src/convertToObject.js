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
  const stylesObject = {};
  const styles = sourceString
    .split(';')
    .map(style => style.split(':'));

  styles.forEach(prop => {
    if (prop.length === 2) {
      stylesObject[prop[0].trim()] = prop[1].trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
