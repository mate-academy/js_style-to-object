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
  const Styles = sourceString
    .split(';').map(item => item.split(':'))
    .filter(elem => elem.length > 1)
    .map(property => ([property[0].trim(), property[1].trim()]));

  return Styles.reduce((prev, line) => {
    return {
      ...prev, [line[0]]: line[1],
    };
  }, {});
}

module.exports = convertToObject;
