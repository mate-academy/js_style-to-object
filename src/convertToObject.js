'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 *  [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertStyles = sourceString
    .split(';')
    .map(styles => styles.trim().split(':')
      .map(stylesElement => stylesElement.trim()).join(':'))
    .filter(elem => elem !== '');

  const stylesObject = {};

  convertStyles.forEach(style => {
    const [key, value] = style.split(':');

    stylesObject[key] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
