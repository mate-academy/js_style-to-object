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
  let styles = sourceString.replace(/\n*/g, '').split(';');

  styles.forEach((el, i) => {
    styles[i] = el.trim();

    if (styles[i].length === 0) {
    }
  });
  styles = styles.filter(el => el.length > 0).map(el => el.split(':'));

  const result = {};

  styles.forEach(el => {
    result[el[0].trim()] = el[1].trim();
  });

  return result;
}

module.exports = convertToObject;
